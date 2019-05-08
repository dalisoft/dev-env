const { keyGenerator } = require('../helpers');
const crypto = require('crypto');

module.exports = async function(req) {
  const { headers } = req;

  if (!headers.authorization) {
    const err = new Error('');
    err.statusCode = 401;
    err.code = 'UnauthorizedAccess';
    throw err;
  } else {
    const verifyData = await req.jwtVerify().catch(() => null);

    if (verifyData) {
      const clientSignature = crypto
        .createHash('sha256')
        .update(keyGenerator(req))
        .digest('hex');

      if (verifyData.clientSignature !== clientSignature) {
        const err = new Error('');
        err.statusCode = 401;
        err.code = 'UnauthorizedDeviceAccess';
        throw err;
      } else {
        return verifyData;
      }
    }
    const err = new Error('');
    err.statusCode = 403;
    err.code = 'TokenExpiredOrInvalid';
    throw err;
  }
};

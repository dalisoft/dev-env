const pick = require('lodash.pick');
const { jwt, jwtSecretKey } = require('../config');
const { keyGenerator } = require('../helpers');
const crypto = require('crypto');

const secureFields = ['email', 'role', 'clientSignature'];
export default async function(req, _res, payload, next) {
  if (payload.status === 'success') {
    const clientSignature = crypto
      .createHash('sha256')
      .update(keyGenerator(req))
      .digest('hex');

    const accessToken = await this.jwt.sign(
      pick({ ...payload, clientSignature }, secureFields),
      jwtSecretKey,
      jwt
    );

    payload.accessToken = accessToken;
  }
  next(null, payload);
}

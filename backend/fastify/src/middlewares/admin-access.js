export default async (req, res, next) => {
  if (!req.headers['role'] || req.headers['role'].indexOf('admin') === -1) {
    const err = new Error('');
    err.code = 'AdminOnlyResource';
    err.statusCode = 403;

    throw err;
  }
  return next();
};

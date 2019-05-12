import { CORS_DOMAIN } from '../config';

export default (req, res, next) => {
  if (req.headers && req.headers.origin) {
    if (CORS_DOMAIN !== req.headers.origin) {
      return res.status(403).json({
        status: 'error',
        message: 'Declined by CORS'
      });
    }
  }
  next();
};

import { CORS_DOMAIN } from '../config';

export default (req, res, next) => {
  if (req.app.method === 'OPTIONS') {
    if (!req.headers.origin || CORS_DOMAIN !== req.headers.origin) {
      return res.status(403).json({
        status: 'error',
        message: 'Declined by CORS preflight request'
      });
    }
  } else if (req.headers) {
    if (CORS_DOMAIN !== req.headers.origin) {
      return res.status(403).json({
        status: 'error',
        message: 'Declined by CORS HTTP request'
      });
    }
  }
  next();
};

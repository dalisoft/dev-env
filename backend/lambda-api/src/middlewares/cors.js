import { CORS_DOMAIN } from '../config.js';

export default (req, res, next) => {
  res.cors({
    origin: CORS_DOMAIN
  });
  next();
};

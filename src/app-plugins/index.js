import helmet from './helmet';
import rateLimiter from './rate-limiter';
import cors from './cors';
import jwt from './jwt';

export default (app) =>
  app
    .register(rateLimiter)
    .register(cors)
    .register(helmet)
    .register(jwt);

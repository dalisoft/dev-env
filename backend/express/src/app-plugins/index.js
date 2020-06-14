import helmet from './helmet';
import rateLimiter from './rate-limiter';
import cors from './cors';
import jwt from './jwt';

export default (app) =>
  app
    .use(rateLimiter)
    .use(cors)
    .use(helmet)
    .use(jwt);

import rateLimiter from './rate-limiter.js';
import cors from './cors.js';

export default (app) => app.define(rateLimiter).define(cors);

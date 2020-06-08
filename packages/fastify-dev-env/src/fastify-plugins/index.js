import openapi from './fastify-oas';
import normalize from './fastify-normalize';
import helmet from './fastify-helmet';
import rateLimiter from './fastify-rate-limiter';
import cookie from 'fastify-cookie';
import cors from './fastify-cors';
import jwt from './fastify-jwt';
import ws from './fastify-websocket';
import apollo from './fastify-apollo-server';

import pluginsWrap from 'fastify-plugin';

export default pluginsWrap(async (fastify) =>
  fastify
    .register(normalize)
    .register(rateLimiter)
    .register(cookie)
    .register(cors)
    .register(helmet)
    .register(jwt)
    .register(ws)
    .register(apollo)
    .register(openapi)
);

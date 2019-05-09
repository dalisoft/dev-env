import openapi from './fastify-oas';
import normalize from './fastify-normalize';
import helmet from './fastify-helmet';
import rateLimiter from './fastify-rate-limiter';
import cookie from 'fastify-cookie';
import cors from './fastify-cors';
import compress from 'fastify-compress';
import jwt from './fastify-jwt';
import ws from './fastify-websocket';

export default async (fastify) =>
  fastify
    .register(openapi)
    .register(normalize)
    .register(helmet)
    .register(rateLimiter)
    .register(cookie)
    .register(cors)
    .register(compress)
    .register(jwt)
    .register(ws);

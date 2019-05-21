import fastifyCors from 'fastify-cors';
import { corsWhitelist } from '../config';

export default async (fastify) =>
  fastify.register(fastifyCors, {
    origin: corsWhitelist,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin'],
    credentials: true
  });

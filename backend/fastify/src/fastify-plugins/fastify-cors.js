import fastifyCors from 'fastify-cors';
import { corsWhitelist } from '../config';

// This plugin is official, but it's
// not works as we except
// so, we made own CORS plug-in
// which more secure and faster
export default async (fastify) =>
  fastify.register(fastifyCors, {
    origin: [...corsWhitelist],
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin'],
    exposedHeaders: ['X-Admin-Token'],
    credentials: true
  });

import fastifyRateLimit from 'fastify-rate-limit';
import { dev } from '../config';
import { keyGenerator } from '../helpers';

export default async (fastify) =>
  fastify.register(fastifyRateLimit, {
    max: dev ? 500 : 25,
    timeWindow: 30000,
    cache: 10000, // default 5000
    whitelist: [],
    skipOnError: false, // default false
    keyGenerator
  });

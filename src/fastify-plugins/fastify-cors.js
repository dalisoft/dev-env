import fastifyCors from 'fastify-cors';
import { corsWhitelist } from '../config';

export default async (fastify) =>
  fastify.register(fastifyCors, { origin: corsWhitelist });

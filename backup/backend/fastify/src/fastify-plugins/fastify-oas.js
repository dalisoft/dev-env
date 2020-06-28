import fastifyOas from 'fastify-oas';
import fastifyOasConfig from '../../docs-config.js';

export default async (fastify) =>
  fastify.register(fastifyOas, fastifyOasConfig);

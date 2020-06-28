import fastifyHelmet from 'fastify-helmet';

export default async (fastify) =>
  fastify.register(fastifyHelmet, { hidePoweredBy: { setTo: 'Fastify' } });

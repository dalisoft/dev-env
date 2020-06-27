import fastifyNormalizeRequestReply from 'fastify-normalize-request-reply';

export default async (fastify) =>
  fastify.register(fastifyNormalizeRequestReply, {
    'trust proxy': 1,
    etag: false
  });

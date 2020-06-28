import jwtVerify from './jwt-verify';

export default async (fastify) => {
  fastify.addHook('preHandler', jwtVerify);
};

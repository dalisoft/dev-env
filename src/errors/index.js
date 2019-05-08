import { allHandler, notFoundHandler } from './handler';

export default async (fastify) => {
  fastify.setNotFoundHandler(notFoundHandler);
  fastify.setErrorHandler(allHandler);
};

import { allHandler, notFoundHandler } from './handler';
import wrapErrorHandler from 'fastify-plugin';

export default wrapErrorHandler(async (fastify) => {
  fastify.setNotFoundHandler(notFoundHandler);
  fastify.setErrorHandler(allHandler);
});

import { allHandler, notFoundHandler } from './handler/index.js';
import wrapErrorHandler from 'fastify-plugin';

export default wrapErrorHandler(async (fastify) => {
  fastify.setNotFoundHandler(notFoundHandler);
  fastify.setErrorHandler(allHandler);
});

import route1 from './route1';

export default async (fastify) => {
  fastify.get('/', async () => async () => ({ status: 'success' }));

  fastify.register(route1, { prefix: '/route1' });
};

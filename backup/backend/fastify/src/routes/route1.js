import { Controller1 } from '../controllers/index.js';

export default async (fastify) => {
  fastify.get('/', async () => 'hello');
  fastify.get('/hello', async (req) => new Controller1(req).Hello());

  fastify.get(
    '/:id',
    async (req) => ({
      message: 'get called on /get/' + req.params.id
    }),
    { prefix: '/get' }
  );

  fastify.get(
    '/profile',
    async () => ({ message: 'get called on /post/profile' }),
    { prefix: '/post' }
  );
  fastify.post(
    '/profile/:id',
    async (req) => ({
      message: 'post on /post/profile/' + req.params.id
    }),
    { prefix: '/post' }
  );
  fastify.post(
    '/profile/:id',
    async (req) => ({
      message: 'post on /post/profile/' + req.params.id
    }),
    { prefix: '/post' }
  );

  fastify.post(
    '/profile/:id/verify',
    async (req) => ({
      message: 'post on /post/profile/' + req.params.id + '/verify'
    }),
    { prefix: '/post' }
  );
  fastify.put(
    '/profile/:id/verify/:token',
    async (req) => ({
      message:
        'put on /post/profile/' + req.params.id + '/verify/' + req.params.token
    }),
    { prefix: '/post' }
  );
};

import { Controller1 } from '../controllers/index.js';

export default async (fastify) => {
  fastify.get('/', async () => 'hello');
  fastify.get('/hello', async (req) => new Controller1(req).Hello());

  fastify.get('/get/:id', async (req) => ({
    message: 'get called on /get/' + req.params.id
  }));

  fastify.get('/post/profile', async () => ({
    message: 'get called on /post/profile'
  }));
  fastify.post('/post/profile/:id', async (req) => ({
    message: 'post on /post/profile/' + req.params.id
  }));

  fastify.post('/post/profile/:id/verify', async (req) => ({
    message: 'post on /post/profile/' + req.params.id + '/verify'
  }));
  fastify.put('/post/profile/:id/verify/:token', async (req) => ({
    message:
      'put on /post/profile/' + req.params.id + '/verify/' + req.params.token
  }));
};

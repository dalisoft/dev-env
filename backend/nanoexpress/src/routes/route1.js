import { Controller1 } from '../controllers/index.js';

export default (app) => {
  app.get('/route1', async () => 'hello');

  app.get('/route1/hello', async (req) => await new Controller1(req).Hello());

  app.get('/route1/get/:id', async (req) => ({
    message: 'get called on /get/' + req.params.id
  }));

  app.get('/route1/post/profile', async () => ({
    message: 'get called on /post/profile'
  }));
  app.post('/route1/post/profile/:id', async (req) => ({
    message: 'post on /post/profile/' + req.params.id
  }));
  app.put('/route1/post/profile/:id/verify/:token', async (req) => ({
    message:
      'put on /post/profile/' + req.params.id + '/verify/' + req.params.token
  }));
  app.post('/route1/post/profile/:id/verify', async (req) => ({
    message: 'post on /post/profile/' + req.params.id + '/verify'
  }));
};

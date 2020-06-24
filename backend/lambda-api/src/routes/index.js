import routeHello from './route-hello.js';
import routeAsyncHello from './route-async-hello.js';

export default (app) => {
  app.get('/', async () => ({ status: 'success' }));
  app.get('/hello', routeHello);
  app.get('/hello-async', routeAsyncHello);
  app.post('/post', async () => ({ cors: 'enabled' }));

  return app;
};

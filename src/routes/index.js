import routeHello from './route-hello';
import routeAsyncHello from './route-async-hello';

export default (app) => {
  app.get('/', async () => ({ status: 'success' }));
  app.get('/hello', routeHello);
  app.get('/hello-async', routeAsyncHello);

  return app;
};

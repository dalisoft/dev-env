import route1 from './route1';

export default (app) => {
  app.get('/', () => ({ status: 'success' }));

  app.register(route1);
};

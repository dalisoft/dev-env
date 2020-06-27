import route1 from './route1.js';

export default (app) => {
  app.get('/', async () => ({ status: 'success' }));

  app.define(route1);
};

import route1 from './route1';

export default (app) => {
  app.get('/', (req, res) => res.json({ status: 'success' }));

  app.use('/route1', route1);
};

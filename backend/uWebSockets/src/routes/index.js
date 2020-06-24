export default (app) => {
  app.get('/hello', (res) => {
    res.end(JSON.stringify({ status: 'success', page: '/hello' }));
  });
};

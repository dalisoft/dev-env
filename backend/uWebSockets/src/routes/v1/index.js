export default (app) => {
  app.get('/v1/', (res) => {
    res.end('hello world from /v1/');
  });
};

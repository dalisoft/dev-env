export default (app) => {
  app.get('/health', async () => ({ status: 'success' }));
};

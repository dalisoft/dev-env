export default (app) => {
  app.get(
    '/health',
    {
      schema: {
        response: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            headers: { type: 'object' }
          }
        },
        headers: {
          type: 'object',
          properties: {}
        },
        params: false,
        query: false
      }
    },
    (req, res) => {
      res.json({ status: 'success' });
    }
  );
};

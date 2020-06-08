export default (app) => {
  app.get(
    '/health',
    {
      schema: {
        response: {
          type: 'object',
          properties: {
            status: { type: 'string' }
          }
        },
        headers: false,
        params: false,
        query: false
      }
    },
    (req, res) => {
      res.json({ status: 'success' });
    }
  );
};

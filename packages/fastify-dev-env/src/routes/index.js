import route1 from './route1';

const app = {
  '/': {
    get: async () => ({ status: 'success' })
  },
  route1
};

export default app;

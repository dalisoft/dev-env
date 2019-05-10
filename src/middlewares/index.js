import cors from './cors';

export default async (app) => {
  app.options('*', cors);
};

import cors from './cors';

export default (app) => {
  app.options('*', cors);
};

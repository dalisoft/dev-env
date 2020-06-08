import expressHelmet from 'helmet';

export default (app) =>
  app.use(expressHelmet({ hidePoweredBy: { setTo: 'nanoexpress' } }));

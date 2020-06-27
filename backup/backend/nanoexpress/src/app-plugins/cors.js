import expressCors from 'express-cors';
import { corsWhitelist } from '../config.js';

// This plugin is official, but it's
// not works as we except
// so, we made own CORS plug-in
// which more secure and faster
export default (app) =>
  app.options(
    '*',
    expressCors({
      origin: [...corsWhitelist],
      optionsSuccessStatus: 200,
      allowedHeaders: ['Content-Type', 'Authorization', 'Origin'],
      exposedHeaders: ['X-Admin-Token'],
      credentials: true
    })
  );

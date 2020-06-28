import fastify from 'fastify';
import { dev } from './config';
import fastifyConfig from './server-config';
import fastifyPlugins from './fastify-plugins/index.js';
import fastifyHandler from './errors/index.js';

import appRoutes from './routes/index.js';
import appMiddlewares from './middlewares/index.js';

export default (serverFactory) => {
  if (serverFactory) {
    fastifyConfig.serverFactory = serverFactory;
  }
  const config = {};
  const app = fastify(fastifyConfig);

  app.register(fastifyHandler);
  app.register(fastifyPlugins);

  if (process.env.NETLIFY_ENV) {
    if (dev) {
      // Netlify Functions DEV-mode compatibility
      config.prefix = 'server';
      app.register(appMiddlewares);
      app.register(appRoutes, config);
    } else {
      // Netlify Functions PROD-mode compatibility
      config.prefix = '.netlify/functions/server';
      app.register(appMiddlewares);
      app.register(appRoutes, config);
    }
  } else {
    app.register(appMiddlewares);
    app.register(appRoutes, config);
  }

  return app;
};

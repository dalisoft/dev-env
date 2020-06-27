import fastify from 'fastify';
import { dev } from './config';
import fastifyConfig from './server-config';
import fastifyPlugins from './fastify-plugins';
import fastifyHandler from './errors';

import { routePathsNormalizer } from './helpers';

import appRoutes from './routes';
import * as appMiddlewares from './middlewares';

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
      app.register(routePathsNormalizer(appMiddlewares, appRoutes), config);
    } else {
      // Netlify Functions PROD-mode compatibility
      config.prefix = '.netlify/functions/server';
      app.register(routePathsNormalizer(appMiddlewares, appRoutes), config);
    }
  } else {
    app.register(routePathsNormalizer(appMiddlewares, appRoutes));
  }

  return app;
};

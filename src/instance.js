import './env';
import fastify from 'fastify';
import fastifyConfig from './server-config';
import fastifyPlugins from './fastify-plugins';
import fastifyHandler from './errors';
import { dev } from './config';

import { routePathsNormalizer } from './helpers';

import appRoutes from './routes';
import * as appMiddlewares from './middlewares';

export default (serverFactory) => {
  if (serverFactory) {
    fastifyConfig.serverFactory = serverFactory;
  }
  const app = fastify(fastifyConfig);

  app.register(fastifyHandler);

  if (process.env.NETLIFY_ENV) {
    if (dev) {
      app.register(routePathsNormalizer(appMiddlewares, appRoutes), {
        prefix: 'server' // Netlify Functions compatibility
      });
      app.register(fastifyPlugins, {
        prefix: 'server' // Netlify Functions compatibility
      });
    } else {
      app.register(routePathsNormalizer(appMiddlewares, appRoutes), {
        prefix: '.netlify/functions/server' // Netlify Functions compatibility
      });
      app.register(fastifyPlugins, {
        prefix: '.netlify/functions/server' // Netlify Functions compatibility
      });
    }
  } else {
    app
      .register(fastifyPlugins)
      .register(routePathsNormalizer(appMiddlewares, appRoutes));
  }

  return app;
};

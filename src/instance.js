import './env';
import fastify from 'fastify';
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
  const app = fastify(fastifyConfig);

  app
    .register(fastifyHandler)
    .register(fastifyPlugins)
    .register(routePathsNormalizer(appMiddlewares, appRoutes))
    .register(routePathsNormalizer(appMiddlewares, appRoutes), {
      prefix: '.netlify/functions/server' // Netlify Serverless compatibility
    });

  return app;
};

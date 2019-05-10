const time = Date.now(); // For better managing start-time / lags

import './env';
import console from 'consolemd';
import fastify from 'fastify';
import fastifyConfig from './server-config';
import fastifyPlugins from './fastify-plugins';
import fastifyHandler from './errors';

import { routePathsNormalizer } from './helpers';

import * as appRoutes from './routes';
import * as appMiddlewares from './middlewares';

const app = fastify(fastifyConfig);

app
  .register(fastifyHandler)
  .register(fastifyPlugins)
  .register(routePathsNormalizer(appMiddlewares, appRoutes));

app.get('/', async () => {
  return { status: 'success' };
});

async function start() {
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(
    `#green([*Server*]: started successfully at *localhost:${port}* in *${Date.now() -
      time}ms*)`
  );
}

start();

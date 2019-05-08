import './env';
import console from 'consolemd';
import fastify from 'fastify';
import fastifyConfig from './server-config';
import fastifyPlugins from './fastify-plugins';
import fastifyHandler from './errors';

const app = fastify(fastifyConfig);

app.register(fastifyHandler).register(fastifyPlugins);

async function start() {
  const port = process.env.PORT || 3000;
  const time = Date.now();
  await app.listen(port, '0.0.0.0');
  console.log(
    `#green([*Server*]: started successfully at *localhost:${port}* in *${Date.now() -
      time}ms*)`
  );
}

start();

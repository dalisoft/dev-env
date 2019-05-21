const time = Date.now(); // For better managing start-time / lags

import app from './instance';

import compress from 'fastify-compress';
import { consolemd } from './helpers';

async function start() {
  const port = process.env.PORT || 3000;
  const appInit = app();
  appInit.register(compress);
  await appInit.listen(port, '0.0.0.0');
  consolemd.log(
    `#green([*Server*]: started successfully at *localhost:${port}* in *${Date.now() -
      time}ms*)`
  );
}

if (typeof require !== 'undefined' && require.main === module) {
  start();
}

export default app;

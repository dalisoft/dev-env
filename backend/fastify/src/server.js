const time = Date.now(); // For better managing start-time / lags

import compress from 'fastify-compress';
import app from './instance';

async function start() {
  const port = process.env.PORT || 3000;
  const appInit = app();
  appInit.register(compress);
  await appInit.listen(port, '0.0.0.0');
  console.log(
    `[Server]: started successfully at localhost:${port} in ${
      Date.now() - time
    }ms`
  );
}

if (typeof require !== 'undefined' && require.main === module) {
  start().then(() => {
    console.log('[Server]: non-serverless stateful server was started');
  });
} else {
  console.log('[Server]: serverless stateless server was triggered');
}

export default app;

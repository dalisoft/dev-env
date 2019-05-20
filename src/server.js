const time = Date.now(); // For better managing start-time / lags
import consolemd from 'consolemd';

import app from './instance';

async function start() {
  const port = process.env.PORT || 3000;
  const appInit = app();
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

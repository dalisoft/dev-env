// Need for calculating time
const timeStart = Date.now();

import uWS from 'uWebSockets.js';
import './env';
import routes from './routes';

let app;
if (process.env.HTTPS) {
  // app = uWS.SSLApp({});
} else {
  app = uWS.App();
}

app.get('/', (res) => {
  res.end('hello world');
});

routes(app);

app.listen(Number(process.env.PORT), (token) => {
  if (token) {
    console.log(
      `[Server]: Server started successfully 0.0.0.0:${
        process.env.PORT
      } in ${Date.now() - timeStart}ms`
    );
  } else {
    console.log('[Server]: Server failed to start');
  }
});

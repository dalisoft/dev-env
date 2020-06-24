// Need for calculating time
const timeStart = Date.now();

import uWS from 'uWebSockets.js';
import './env.js';
import routes from './routes/index.js';

const app = uWS.App();

app.get('/', (res) => {
  res.end(JSON.stringify({ status: 'success', page: '/' }));
});

routes(app);

app.listen(Number(process.env.PORT), (token) => {
  if (token) {
    console.log(
      `[Server]: Server started successfully 0.0.0.0:${process.env.PORT} in ${
        Date.now() - timeStart
      }ms`
    );
  } else {
    console.log('[Server]: Server failed to start');
  }
});

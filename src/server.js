import express from 'express';
import './env';
import appPlugins from './app-plugins';

import appRoutes from './routes';

const app = express();

appPlugins(app);
appRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('[Server]: Listening at', port);
});

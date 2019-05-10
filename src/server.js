const time = Date.now(); // For better managing start-time / lags

import lambda from 'lambda-api';
import routes from './routes';
import middlewares from './middlewares';

// Initialize Instance (cold start)
const appConfig = {
  logger: false /* { level: 'warn' } */
};
const app = lambda(appConfig);

// Register middlewares
app.register(middlewares);

// Register routes
app.register(routes, { prefix: 'server' });
app.register(routes, {
  prefix: '.netlify/functions/server' // Netlify Serverless compatibility
});

// Log into console, shows how much takes initialization time
console.log(`[Serverless]: started successfully at in ${Date.now() - time}ms`);

export default app;

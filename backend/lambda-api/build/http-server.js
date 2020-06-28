'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var http = require('http');
var querystring = require('querystring');
var lambda = _interopDefault(require('lambda-api'));
var dotenv = _interopDefault(require('dotenv-safe'));

var routeHello = (req, res) => {
  res.json({ hello: 'world' });
};

var routeAsyncHello = async () => ({ hello: 'world' });

var routes = (app) => {
  app.get('/', async () => ({ status: 'success' }));
  app.get('/hello', routeHello);
  app.get('/hello-async', routeAsyncHello);
  app.post('/post', async () => ({ cors: 'enabled' }));

  return app;
};

if (process.env.NODE_ENV === 'development' && !process.env.CORS_DOMAIN) {
  dotenv.config();
}

const { CORS_DOMAIN } = process.env;

var cors = (req, res, next) => {
  res.cors({
    origin: CORS_DOMAIN
  });
  next();
};

var middlewares = (app) => {
  app.use(cors);
};

const time = Date.now(); // For better managing start-time / lags

// Initialize Instance (cold start)
const appConfig = {
  logger: false /* { level: 'warn' } */
};
const app = lambda(appConfig);

// Register middlewares
app.register(middlewares);

// Register routes
app.register(routes); // AWS Lambda/now serverless compatibility
app.register(routes, { prefix: 'server' }); // Netlify development Serverless compatibility
app.register(routes, {
  prefix: '.netlify/functions/server' // Netlify production Serverless compatibility
});

// Log into console, shows how much takes initialization time
console.log(`[Serverless]: started successfully at in ${Date.now() - time}ms`);

// Declare your Lambda handler
var httpHandler = async (request, response) => {
  const { url, method, headers, body } = request;
  const queryParams = querystring.parse(url.substr(url.indexOf('/') + 2));

  const event = {
    httpMethod: method.toUpperCase(),
    path: url,
    resource: '/{proxy+}',
    queryStringParameters: queryParams, // TODO: do it later
    headers,
    requestContext: {},
    pathParameters: {},
    stageVariables: {},
    isBase64Encoded: false,
    body
  };
  // Run the request
  const res = await app.run(event, {}).catch((error) => ({ error }));

  if (res && !res.error) {
    let { body } = res;
    const { headers, statusCode } = res;
    if (res.isBase64Encoded) {
      body = Buffer.from(body, 'base64');
    }
    if (!headers['content-length'] && body) {
      headers['content-length'] = body.length;
    }
    response.writeHead(statusCode, headers);
    response.end(body);
  } else {
    console.error('Error was occured', res.error);
    response.writeHead(500, { 'content-length': 0 });
    response.end('');
  }
};

const server = http.createServer(httpHandler);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Server listening at port ' + port);
});

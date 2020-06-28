'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var compress = _interopDefault(require('fastify-compress'));
var fastify = _interopDefault(require('fastify'));
var dotenvSafe = _interopDefault(require('dotenv-safe'));
var fs = _interopDefault(require('fs'));
var fastifyOas = _interopDefault(require('fastify-oas'));
var fastifyNormalizeRequestReply = _interopDefault(require('fastify-normalize-request-reply'));
var fastifyHelmet = _interopDefault(require('fastify-helmet'));
var fastifyRateLimit = _interopDefault(require('fastify-rate-limit'));
var cookie$1 = _interopDefault(require('fastify-cookie'));
var fastifyCors = _interopDefault(require('fastify-cors'));
var fastifyJWT = _interopDefault(require('fastify-jwt'));
var Server = _interopDefault(require('ws/lib/websocket-server.js'));
var fastifyPlugin = _interopDefault(require('fastify-plugin'));
var apolloServerFastify = require('apollo-server-fastify');
var graphql = require('graphql');
var crypto = _interopDefault(require('crypto'));

if (process.env.NODE_ENV === 'development') {
  // Zeit now can cause fail this method
  // So we just wrapped it within try/catch
  // To avoid error and avoid crash of server
  // Now.sh local server
  console.log('[Server]: started in DEVELOPMENT mode');

  if (!process.env.secretKey) {
    try {
      dotenvSafe.config();
      console.log('[Server]: ENV variables are loaded');
    } catch (e) {
      console.log(
        '[Server]: error while setting ENV variables, ' +
          'i think you using Vercel hosting, do not worry, your backend still works )'
      );
    }
  }
}

const {
  NODE_ENV,
  GRAPHIQL,
  DB_HOST: host,
  DB_NAME: db,
  DB_USER: username,
  DB_PASSWORD: password,
  DB_PORT,
  FRONT_URL,
  HTTPS,
  SECURE_COOKIE,
  COOKIE_SAMESITE,
  COOKIE_DOMAIN,
  COOKIE_PATH = '/',
  ERROR_LOG,
  secretKey,
  jwtSecretKey,
  PORT
} = process.env;

const secure = JSON.parse(HTTPS || SECURE_COOKIE || false);
const log = ERROR_LOG ? JSON.parse(ERROR_LOG) : false;
const dev = NODE_ENV === 'development';
const port = PORT || 8080;
const corsWhitelist = [FRONT_URL, dev && 'http://localhost:' + port].filter(
  (url) => url
);
const jwtSign = {
  secret: jwtSecretKey,
  sign: {
    algorithm: 'HS512',
    issuer: 'api.domain.tld'
  },
  verify: { issuer: 'api.domain.tld', secret: secretKey }
};
const cookie = {
  httpOnly: true,
  secure,
  sameSite: COOKIE_SAMESITE ? JSON.parse(COOKIE_SAMESITE) : false,
  domain: COOKIE_DOMAIN,
  path: COOKIE_PATH
};

const graphiql = dev || GRAPHIQL;

const { LOGGER, HTTPS: HTTPS$1, HTTP2, PURE } = process.env;

const fastifyConfig = {
  logger: JSON.parse(LOGGER || false),
  ignoreTrailingSlash: true
};

if (PURE && HTTPS$1 && JSON.parse(HTTPS$1)) {
  fastifyConfig.https = {
    key: fs.readFileSync('https/key.pem'),
    cert: fs.readFileSync('https/cert.pem')
  };
}
if (PURE && HTTP2 && JSON.parse(HTTP2)) {
  fastifyConfig.http2 = true;
  if (fastifyConfig.https) {
    fastifyConfig.https.allowHTTP1 = true; // fallback support for HTTP1
  } else {
    fastifyConfig.http = {};
    fastifyConfig.http.allowHTTP1 = true;
  }
}

const { HTTPS: HTTPS$2, PORT: PORT$1, NODE_ENV: NODE_ENV$1, BACKEND_URL, TEST_BACKEND_URL } = process.env;
const secure$1 = HTTPS$2 && String(HTTPS$2).length > 0;
const dev$1 = NODE_ENV$1 === 'development';

var fastifyOasConfig = {
  // addModels: true,
  swagger: {
    info: {
      title: 'Fastify Dev Env',
      description: 'Fastify Dev Env documentation',
      version: '0.1.0'
    },
    servers: [
      {
        url: `${secure$1 ? 'https' : 'http'}://0.0.0.0:` + PORT$1,
        description: 'Local development'
      },
      {
        url: TEST_BACKEND_URL,
        description: 'Production on test-server'
      },
      {
        url: BACKEND_URL,
        description: 'Production on real-server'
      }
    ].filter((f) => f.url),
    host: dev$1 ? '0.0.0.0:' + PORT$1 : BACKEND_URL,
    schemes: ['http', secure$1 && 'https'].filter((f) => f),
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      {
        name: 'route-1',
        description: 'Route category 1'
      },
      {
        name: 'route-2',
        description: 'Route category 2'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          description: 'Authorization Token',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  exposeRoute: true
};

var openapi = async (fastify) =>
  fastify.register(fastifyOas, fastifyOasConfig);

var normalize = async (fastify) =>
  fastify.register(fastifyNormalizeRequestReply, {
    'trust proxy': 1,
    etag: false
  });

var helmet = async (fastify) =>
  fastify.register(fastifyHelmet, { hidePoweredBy: { setTo: 'Fastify' } });

var hasKeyObj = (obj) => {
  if (!obj) {
    return false;
  }
  for (const key in obj) {
    return true;
  }
};

var keyGenerator = (req) =>
  req.headers['x-real-ip'] || // nginx
  req.headers['cf-connecting-ip'] || // cloudflare at top
  req.headers['x-client-ip'] || // apache
  req.headers['x-forwarded-for'] || // if we trust to this, cloudflare
  req.raw.ip;

var wsWrap = (callback, wss, allowedOrigins) => {
  return (client, req) => {
    const { origin } = req.headers;
    client.clients = wss.clients;

    if (dev || allowedOrigins.indexOf(origin) !== -1) {
      return callback(client, req);
    }
    client.send(
      JSON.stringify({ error: true, message: 'Not allowed by CORS' })
    );
    client.close();
  };
};

class dbHelpers {
  getValue() {
    return 'somevalue';
  }
}

var rateLimiter = async (fastify) =>
  fastify.register(fastifyRateLimit, {
    max: dev ? 500 : 25,
    timeWindow: 30000,
    cache: 10000, // default 5000
    whitelist: [],
    skipOnError: false, // default false
    keyGenerator
  });

// This plugin is official, but it's
// not works as we except
// so, we made own CORS plug-in
// which more secure and faster
var cors = async (fastify) =>
  fastify.register(fastifyCors, {
    origin: [...corsWhitelist],
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin'],
    exposedHeaders: ['X-Admin-Token'],
    credentials: true
  });

var jwt = async (fastify) => fastify.register(fastifyJWT, jwtSign);

var ws = fastifyPlugin((fastify, options, next) => {

  const clients = {};

  fastify.addHook('onRequest', (req, res, next) => {
    if (req.headers.cookie) {
      clients[req.headers.cookie] = req;
    }
    next();
  });

  function findClient(cookie, tries = 10) {
    let timerId;
    return new Promise(function findClientPromise(resolve, reject) {
      if (clients[cookie]) {
        clearTimeout(timerId);
        resolve(clients[cookie], cookie);
      } else if (tries === 0) {
        clearTimeout(timerId);
        reject(
          new Error(
            'Initial request to server is required ' +
              'to be WebSocket and it is verify mechanism'
          )
        );
      } else {
        timerId = setTimeout(findClient, tries-- * 100, resolve, reject);
      }
    });
  }

  fastify.ws = (path, fn) => {
    const wss = new Server({
      verifyClient(info, done) {
        findClient(info.req.headers.cookie)
          .then((request, key) => {
            Object.assign(info.req, request);
            done(corsWhitelist.includes(info.origin));
            delete clients[key];
          })
          .catch((code) => done(false, code, info.req.headers));
      },
      server: fastify.server,
      path
    });

    fastify.addHook('onClose', (fastify, done) => {
      wss.close(done);
    });
    wss.on('connection', wsWrap(fn, wss, corsWhitelist));

    return wss;
  };

  next();
});

var pubsub = new apolloServerFastify.PubSub();

const HELLO = 'HELLO';

var hello = {
  type: graphql.GraphQLString,
  resolve() {
    pubsub.publish(HELLO, { hello: 'Hello world at ' + Date.now() });
    return 'Hello world';
  }
};

var queries = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hello: hello
});

var mutations = /*#__PURE__*/Object.freeze({
  __proto__: null
});

// Uncomment here if you want test subscription
/* setInterval(() => {
  pubsub.publish(HELLO, { hello: 'Hello world at ' + Date.now() });
}, 1000); */

var hello$1 = {
  type: graphql.GraphQLString,
  // eslint-disable-next-line no-unused-vars
  subscribe: (_, data, ctx) => pubsub.asyncIterator(HELLO)
};

var subscriptions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hello: hello$1
});

/* eslint-disable indent */

const schema = new graphql.GraphQLSchema({
  query: hasKeyObj(queries)
    ? new graphql.GraphQLObjectType({
        name: 'Query',
        fields: queries
      })
    : undefined,
  mutation: hasKeyObj(mutations)
    ? new graphql.GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
      })
    : undefined,
  subscription: hasKeyObj(subscriptions)
    ? new graphql.GraphQLObjectType({
        name: 'Subscription',
        fields: subscriptions
      })
    : undefined
});

var apollo = async (fastify) => {
  // Create instance
  const apollo = new apolloServerFastify.ApolloServer({
    schema,
    playground: graphiql && { version: '1.7.25' }
  });

  // Add subscription support
  if (fastify.server) {
    apollo.installSubscriptionHandlers(fastify.server);
  }

  let path = '';
  if (process.env.NETLIFY_ENV) {
    if (dev) {
      path = '/graphql';
    } else {
      path = '.netlify/functions/graphql';
    }
  } else {
    path = '/graphql';
  }

  return fastify.register(
    apollo.createHandler({
      path,
      cors: {
        origin: [...corsWhitelist], // Avoid side-effects as this variable can be used elsewhere
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Origin', 'Accept'],
        credentials: true
      }
    })
  );
};

var fastifyPlugins = fastifyPlugin(async (fastify) =>
  fastify
    .register(normalize)
    .register(rateLimiter)
    .register(cookie$1)
    .register(cors)
    .register(helmet)
    .register(jwt)
    .register(ws)
    .register(apollo)
    .register(openapi)
);

const ONLY_STRING_LETTERS = '([0-9A-Za-z]+)';

// import { typeNames, requestTypeNames } from './types';
// import misc from './misc';

var regExErrors = {
  'body/(.*) ': 'In Request body field $1',
  [`(.*) should have required property '${ONLY_STRING_LETTERS}'`]: (
    _,
    $0,
    $1
  ) => `Request ${$0} should have required property \`${$1}\``,
  'body should NOT have additional properties':
    'Request body should NOT have additional properties',
  'body.(.*) should be (.*)': (_, $1, $2) =>
    `Request body field type \`${$1}\` should be ${$2}`,
  'body.(.*) should NOT be (.*) than (.*) characters': (_, $1, $2, $3) =>
    `Request body field \`${$1}\` should NOT be ${$2} than ${$3} characters`,
  '(.*) is required!': 'In Response body should be field `$1`!'
};

var httpErrors = {
  NotFound: 'This path doesn\'t exist at server, please check request path',
  BadRequest:
    'Your request seems to be invalid or incorrect, please check your request'
};

var customErrors = {
  TokenExpiredOrInvalid:
    'The token which you logged was expired and/or broken, please relogin to gain access again',
  UnauthorizedAccess:
    'This path is protected and only for Authorized users only, please login first to get access',
  UnauthorizedDeviceAccess:
    'Looks like you changed network or device, so, please login again due of security',
  AdminOnlyResource: 'This path is accessible only for admins and devs',
  AccessDeniedByCORS: 'This request is denied by CORS security',
  UserNotFound: 'User doesn\'t found in our database',
  InvalidPassword: 'Invalid password'
};

var index = {
  ...regExErrors,
  httpErrors,
  customErrors
};

const typeNames = {
  string: 'строка',
  number: 'цифра',
  array: 'массив',
  object: 'обьект',
  symbol: 'символ',
  boolean: 'були'
};

const requestTypeNames = {
  querystring: 'Параметр',
  body: 'Тело'
};

var misc = {
  shorter: 'короче',
  longer: 'длиннее'
};

var regExErrors$1 = {
  'body/(.*) ': 'В тело запроса поле $1',
  [`(.*) should have required property '${ONLY_STRING_LETTERS}'`]: (
    _,
    $0,
    $1
  ) =>
    `${requestTypeNames[$0]} запроса должно иметь обязательное поле \`${$1}\``,
  'body should NOT have additional properties':
    'Тело запроса НЕ должно иметь дополнительные поля',
  'body.(.*) should be (.*)': (_, $1, $2) =>
    `В тело запроса поле \`${$1}\` должно быть ${typeNames[$2]}`,
  'body.(.*) should NOT be (.*) than (.*) characters': (_, $1, $2, $3) =>
    `В тело запроса поле \`${$1}\` НЕ должно быть ${
      misc[$2]
    } чем ${$3} символов`,
  '(.*) is required!': 'В ответ должно быть поле `$1`!',
  'Rate limit exceeded, retry in (.*) seconds':
    'Превышено ограничение на частоту, повторите попытку через $1 секунд'
};

var httpErrors$1 = {
  NotFound:
    'Этот путь не существует на сервере, пожалуйста, проверьте путь запроса',
  BadRequest:
    'Ваш запрос кажется недействительным или неправильным, пожалуйста, проверьте ваш запрос'
};

var customErrors$1 = {
  TokenExpiredOrInvalid:
    'Токен, который вы вошли в систему, устарел и/или сломан, пожалуйста,' +
    'повторно войдите в систему, чтобы получить доступ снова',
  UnauthorizedAccess:
    'Этот путь защищен и только для авторизованных пользователей, пожалуйста, сначала войдите, чтобы получить доступ',
  UnauthorizedDeviceAccess:
    'Похоже, вы изменили сеть или устройство, поэтому, пожалуйста, войдите снова из-за безопасности',
  AdminOnlyResource:
    'Этот путь доступен только для администраторов и разработчиков',
  AccessDeniedByCORS: 'Этот запрос отклонен системой безопасности CORS',
  'Too Many Requests': 'Превышено ограничение на частоту запросов',
  UserNotFound: 'Пользователь не найден в нашей базе данных',
  InvalidPassword: 'Неверный пароль'
};

var index$1 = {
  ...regExErrors$1,
  httpErrors: httpErrors$1,
  customErrors: customErrors$1
};

var translations = /*#__PURE__*/Object.freeze({
  __proto__: null,
  en: index,
  ru: index$1
});

/* eslint-disable indent */

var allHandler = async (error, request, res) => {
  if (
    error.validation ||
    error.code ||
    error.message.includes('is required') ||
    error.statusCode
  ) {
    res.status(error.statusCode || 500);

    const { message, code } = error;
    const { lang = 'en' } = request.headers;
    const map = translations[lang];
    let errors;

    if (message) {
      errors = message.split(', ');
      map &&
        Object.keys(map).forEach((key) => {
          errors = errors.map((m) => m.replace(new RegExp(key, 'g'), map[key]));
        });
    }

    return {
      status: 'error',
      message:
        map.httpErrors[code] ||
        map.customErrors[code] ||
        map.httpErrors.BadRequest,
      errors
    };
  }

  const stack = error.stack
    ? error.stack
        .split('\n')
        .map((e) => e.trim())
        .filter((e, i, s) => s.indexOf(e) === i)
    : error.stack_trace;

  console.log('[Server]: error was happened', '\n', stack);

  return {
    status: 'error',
    message: 'Server error, please contact to server ',
    stack
  };
};

var notFoundHandler = async (error, request) => {
  const { lang = 'en' } = request.headers;
  const map = translations[lang];

  const { params } = error;

  return {
    status: 'error',
    code: 404,
    message: map.httpErrors.NotFound,
    currentRoute: params['*']
  };
};

var fastifyHandler = fastifyPlugin(async (fastify) => {
  fastify.setNotFoundHandler(notFoundHandler);
  fastify.setErrorHandler(allHandler);
});

var Model1 = () => {
  return {
    id: 'number',
    foo: 'bar'
  };
};

var Models = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Model1: Model1
});

const Controllers = {};

Object.keys(Models).forEach((name) => {
  Controllers[name] = new dbHelpers(Models[name]);
});

class Controller {
  get email() {
    return this.cookies['user-email'];
  }
  get slug() {
    return this.cookies['user-slug'];
  }
  get user() {
    return {
      id: this.slug,
      email: this.email,
      slug: this.slug
    };
  }
  get role() {
    const cookieUserRole = this.cookies['user-email'];
    if (cookieUserRole) {
      return cookieUserRole.split(',');
    }
    return this.user && this.user.role;
  }
  get token() {
    return this.req.headers.authorization;
  }
  constructor(client, request) {
    // Check if Controller for HTTP or not
    this.db = this.name ? Controllers[this.name] : null;
    this.controllers = Controllers;
    if (client.headers && !client.readyState) {
      this.req = client;
      this.query = client.query;
      this.body = client.body;
      this.cookies = client.cookies;
      this.res = request;
    } else {
      this.on = client.on.bind(client);
      this.once = client.once.bind(client);
      this.off = client.off.bind(client);
      this.emit = client.emit.bind(client);
      this.client = client;
      this.req = request;
      this.query = client.query;
      this.body = client.body;
      this.cookies = request.cookies;
      this.clients = client.onlineClientsMap;
    }
  }
  init() {
    // Initialization
  }
}

// HTTP Controller
class Controller1 extends Controller {
  get name() {
    return 'Model1'; // This should refer to src/helpers/models/{MODEL_NAME}
  }
  async Hello() {
    const { db /* res, body */ } = this;

    if (await db.getValue({ txt: 'hello' })) {
      return {
        hello: 'world'
      };
    }
    return {
      hello: 'world',
      exists: false
    };
  }
}

var route1 = async (fastify) => {
  fastify.get('/', async () => 'hello');
  fastify.get('/hello', async (req) => new Controller1(req).Hello());

  fastify.get('/get/:id', async (req) => ({
    message: 'get called on /get/' + req.params.id
  }));

  fastify.get('/post/profile', async () => ({
    message: 'get called on /post/profile'
  }));
  fastify.post('/post/profile/:id', async (req) => ({
    message: 'post on /post/profile/' + req.params.id
  }));

  fastify.post('/post/profile/:id/verify', async (req) => ({
    message: 'post on /post/profile/' + req.params.id + '/verify'
  }));
  fastify.put('/post/profile/:id/verify/:token', async (req) => ({
    message:
      'put on /post/profile/' + req.params.id + '/verify/' + req.params.token
  }));
};

var appRoutes = async (fastify) => {
  fastify.get('/', async () => async () => ({ status: 'success' }));

  fastify.register(route1, { prefix: '/route1' });
};

async function jwtVerify (req) {
  const { headers } = req;

  if (!headers.authorization) {
    const err = new Error('');
    err.statusCode = 401;
    err.code = 'UnauthorizedAccess';
    throw err;
  } else {
    const verifyData = await req.jwtVerify().catch(() => null);

    if (verifyData) {
      const clientSignature = crypto
        .createHash('sha256')
        .update(keyGenerator(req))
        .digest('hex');

      if (verifyData.clientSignature !== clientSignature) {
        const err = new Error('');
        err.statusCode = 401;
        err.code = 'UnauthorizedDeviceAccess';
        throw err;
      } else {
        return verifyData;
      }
    }
    const err = new Error('');
    err.statusCode = 403;
    err.code = 'TokenExpiredOrInvalid';
    throw err;
  }
}

var appMiddlewares = async (fastify) => {
  fastify.addHook('preHandler', jwtVerify);
};

var app = (serverFactory) => {
  if (serverFactory) {
    fastifyConfig.serverFactory = serverFactory;
  }
  const config = {};
  const app = fastify(fastifyConfig);

  app.register(fastifyHandler);
  app.register(fastifyPlugins);

  if (process.env.NETLIFY_ENV) {
    if (dev) {
      // Netlify Functions DEV-mode compatibility
      config.prefix = 'server';
      app.register(appMiddlewares);
      app.register(appRoutes, config);
    } else {
      // Netlify Functions PROD-mode compatibility
      config.prefix = '.netlify/functions/server';
      app.register(appMiddlewares);
      app.register(appRoutes, config);
    }
  } else {
    app.register(appMiddlewares);
    app.register(appRoutes, config);
  }

  return app;
};

const time = Date.now(); // For better managing start-time / lags

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

module.exports = app;

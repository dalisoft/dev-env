'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var dotenv = _interopDefault(require('dotenv-safe'));
var console$1 = _interopDefault(require('consolemd'));
var fastify = _interopDefault(require('fastify'));
var fs = _interopDefault(require('fs'));
var fastifyNormalizeRequestReply = _interopDefault(require('fastify-normalize-request-reply'));
var fastifyHelmet = _interopDefault(require('fastify-helmet'));
var fastifyRateLimit = _interopDefault(require('fastify-rate-limit'));
var wsEventsSync = require('@dalisoft/ws-events-sync');
var cookie$1 = require('@dalisoft/cookie');
var cookie$2 = _interopDefault(require('fastify-cookie'));
var fastifyCors = _interopDefault(require('fastify-cors'));
var compress = _interopDefault(require('fastify-compress'));
var fastifyJWT = _interopDefault(require('fastify-jwt'));
var ws$1 = require('ws');
var fastifyPlugin = _interopDefault(require('fastify-plugin'));

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
  console$1.log('!#green([*Server*]: started in *DEVELOPMENT* mode)');
}

const { LOGGER, HTTPS, HTTP2, PURE } = process.env;

const fastifyConfig = {
  logger: JSON.parse(LOGGER || false),
  ignoreTrailingSlash: true,
};

if (PURE && HTTPS && JSON.parse(HTTPS)) {
  fastifyConfig.https = {
    key: fs.readFileSync('https/key.pem'),
    cert: fs.readFileSync('https/cert.pem'),
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

var normalize = async (fastify) =>
  fastify.register(fastifyNormalizeRequestReply, {
    'trust proxy': 1,
    etag: false,
  });

var helmet = async (fastify) =>
  fastify.register(fastifyHelmet, { hidePoweredBy: { setTo: 'Fastify' } });

const {
  NODE_ENV,
  DB_HOST: host,
  DB_NAME: db,
  DB_USER: username,
  DB_PASSWORD: password,
  DB_PORT,
  FRONT_URL,
  HTTPS: HTTPS$1,
  SECURE_COOKIE,
  COOKIE_SAMESITE,
  COOKIE_DOMAIN,
  COOKIE_PATH = '/',
  ERROR_LOG,
  secretKey,
  jwtSecretKey,
  PORT,
} = process.env;

const secure = JSON.parse(HTTPS$1 || SECURE_COOKIE || false);
const log = ERROR_LOG ? JSON.parse(ERROR_LOG) : false;
const dev = NODE_ENV === 'development';
const corsWhitelist = [FRONT_URL];
const jwtSign = {
  secret: jwtSecretKey,
  sign: {
    algorithm: 'HS512',
    issuer: 'api.domain.tld',
  },
  verify: { issuer: 'api.domain.tld', secret: secretKey },
};
const cookie = {
  httpOnly: true,
  secure,
  sameSite: COOKIE_SAMESITE ? JSON.parse(COOKIE_SAMESITE) : false,
  domain: COOKIE_DOMAIN,
  path: COOKIE_PATH,
};

var keyGenerator = (req) =>
  req.headers['x-real-ip'] || // nginx
  req.headers['cf-connecting-ip'] || // cloudflare at top
  req.headers['x-client-ip'] || // apache
  req.headers['x-forwarded-for'] || // if we trust to this, cloudflare
  req.raw.ip;

var wsWrap = (callback, wss, allowedOrigins, onlineClientsMap) => {
  return (client, req) => {
    const { origin } = req.headers;
    client.clients = wss.clients;

    if (!req.cookies) {
      req.cookies = cookie$1.getFromHeaders(req.headers);
    }
    if (dev || allowedOrigins.indexOf(origin) !== -1) {
      return callback(new wsEventsSync.Server(client, onlineClientsMap), req);
    }
    client.send(
      JSON.stringify({ error: true, message: 'Not allowed by CORS' })
    );
    client.close();
  };
};

var rateLimiter = async (fastify) =>
  fastify.register(fastifyRateLimit, {
    max: dev ? 500 : 25,
    timeWindow: 30000,
    cache: 10000, // default 5000
    whitelist: [],
    skipOnError: false, // default false
    keyGenerator,
  });

var cors = async (fastify) =>
  fastify.register(fastifyCors, { origin: corsWhitelist });

var jwt = async (fastify) => fastify.register(fastifyJWT, jwtSign);

var ws = fastifyPlugin((fastify, options, next) => {
  const onlineClientsMap = {};

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
              'to be WebSocket and it\'s verify mechanism'
          )
        );
      } else {
        timerId = setTimeout(findClient, tries-- * 100, resolve, reject);
      }
    });
  }

  fastify.ws = (path, fn) => {
    const wss = new ws$1.Server({
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
      path,
    });

    fastify.addHook('onClose', (fastify, done) => {
      wss.close(done);
    });
    wss.on('connection', wsWrap(fn, wss, corsWhitelist, onlineClientsMap));

    return wss;
  };

  next();
});

var fastifyPlugins = async (fastify) =>
  fastify
    .register(normalize)
    .register(helmet)
    .register(rateLimiter)
    .register(cookie$2)
    .register(cors)
    .register(compress)
    .register(jwt)
    .register(ws);

const ONLY_STRING_LETTERS = '([0-9A-Za-z]+)';

var en = {
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
  '(.*) is required!': 'In Response body should be field `$1`!',
  httpErrors: {
    NotFound: 'This path doesn\'t exist at server, please check request path',
    BadRequest:
      'Your request seems to be invalid or incorrect, please check your request',
    TokenExpiredOrInvalid:
      'The token which you logged was expired and/or broken, please relogin to gain access again',
    UnauthorizedAccess:
      'This path is protected and only for Authorized users only, please login first to get access',
    UnauthorizedDeviceAccess:
      'Looks like you changed network or device, so, please login again due of security',
    AdminOnlyResource: 'This path is accessible only for admins and devs',
    AccessDeniedByCORS: 'This request is denied by CORS security',
    UserNotFound: 'User doesn\'t found in our database',
    InvalidPassword: 'Invalid password',
  },
};

const types = {
  string: 'строка',
  number: 'цифра',
  array: 'массив',
  object: 'обьект',
  symbol: 'символ',
  boolean: 'були',
};
const reqTypes = {
  querystring: 'Параметр',
  body: 'Тело',
};
const misc = {
  shorter: 'короче',
  longer: 'длиннее',
};

var ru = {
  'body/(.*) ': 'В тело запроса поле $1',
  [`(.*) should have required property '${ONLY_STRING_LETTERS}'`]: (
    _,
    $0,
    $1
  ) => `${reqTypes.ru[$0]} запроса должно иметь обязательное поле \`${$1}\``,
  'body should NOT have additional properties':
    'Тело запроса НЕ должно иметь дополнительные поля',
  'body.(.*) should be (.*)': (_, $1, $2) =>
    `В тело запроса поле \`${$1}\` должно быть ${types.ru[$2]}`,
  'body.(.*) should NOT be (.*) than (.*) characters': (_, $1, $2, $3) =>
    `В тело запроса поле \`${$1}\` НЕ должно быть ${
      misc.ru[$2]
    } чем ${$3} символов`,
  '(.*) is required!': 'В ответ должно быть поле `$1`!',
  'Rate limit exceeded, retry in (.*) seconds':
    'Превышено ограничение на частоту, повторите попытку через $1 секунд',
  httpErrors: {
    NotFound:
      'Этот путь не существует на сервере, пожалуйста, проверьте путь запроса',
    BadRequest:
      'Ваш запрос кажется недействительным или неправильным, пожалуйста, проверьте ваш запрос',
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
    InvalidPassword: 'Неверный пароль',
  },
};



var translations = /*#__PURE__*/Object.freeze({
  en: en,
  ru: ru
});

var allHandler = (error, request, res) => {
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

    return res.send({
      status: 'error',
      message: map.httpErrors[code || 'BadRequest'],
      errors,
    });
  }

  if (!fs.existsSync('./errors')) {
    fs.mkdirSync('./errors');
  }

  console
    .log({
      stack: error.stack
        ? error.stack
          .split('\n')
          .map((e) => e.trim())
          .filter((e, i, s) => s.indexOf(e) === i)
        : error.stack_trace,
      message: error.message,
      headers: request.headers,
      query: request.query,
      body: request.body,
      params: request.params,
    })
    .then(() => {
      res.send({
        status: 'error',
        message: 'Server error, please contact to server ',
      });
    });
};

var notFoundHandler = async (error, request) => {
  const { lang = 'en' } = request.headers;
  const map = translations[lang];

  return { status: 'error', code: 404, message: map.httpErrors.NotFound };
};

var fastifyHandler = async (fastify) => {
  fastify.setNotFoundHandler(notFoundHandler);
  fastify.setErrorHandler(allHandler);
};

const app = fastify(fastifyConfig);

app.register(fastifyHandler).register(fastifyPlugins);

async function start() {
  const port = process.env.PORT || 3000;
  const time = Date.now();
  await app.listen(port, '0.0.0.0');
  console$1.log(
    `#green([*Server*]: started successfully at *localhost:${port}* in *${Date.now() -
      time}ms*)`
  );
}

start();

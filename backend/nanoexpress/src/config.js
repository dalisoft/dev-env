import './env.js';

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

const dbConfig = {
  host,
  db,
  username,
  password,
  port: DB_PORT
};
const test = NODE_ENV === 'test';
const prod = NODE_ENV === 'production' || !NODE_ENV;
const corsWhitelist = [FRONT_URL, dev && 'http://localhost:' + port].filter(
  (url) => url
);
const jwt = {
  expiresIn: 7200000 /* 2 hour */
};
const jwtSign = {
  secret: jwtSecretKey,
  algorithms: ['HS256']
};
const cookie = {
  httpOnly: true,
  secure,
  sameSite: COOKIE_SAMESITE ? JSON.parse(COOKIE_SAMESITE) : false,
  domain: COOKIE_DOMAIN,
  path: COOKIE_PATH
};

const graphiql = dev || GRAPHIQL;

export {
  dbConfig,
  dev,
  graphiql,
  log,
  test,
  prod,
  corsWhitelist,
  jwt,
  secretKey,
  jwtSign,
  cookie,
  port
};

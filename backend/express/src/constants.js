import path from 'path';

const origin = [
  'http://localhost:3000',
  // 'http://docs.my___server.ru',
];

if (process.env.FRONTEND_URL) {
  origin.push(process.env.FRONTEND_URL);
}

const assetsPath = path.resolve('./assets');

// eslint-disable-next-line import/no-mutable-exports
let port = process.env.SERVER_PORT || process.env.PORT;

if (port === undefined) {
  console.log('Server default port was not set, so we use :8080 as default');
  port = 8080;
}

export { origin, assetsPath, port };

import fs from 'fs';

const { LOGGER, HTTPS, HTTP2, PURE, TURBO_HTTP } = process.env;

const fastifyConfig = {
  logger: JSON.parse(LOGGER || false),
  ignoreTrailingSlash: true
};

if (PURE && HTTPS && JSON.parse(HTTPS)) {
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

if (
  TURBO_HTTP &&
  JSON.parse(TURBO_HTTP) === true &&
  typeof require !== 'undefined' &&
  require.main === module &&
  process.env.NETLIFY_ENV === undefined
) {
  // This prevents module to be loading when
  // variable is FALSE or turbo-http module
  // is not installed
  try {
    const Server = require.resolve('turbo-http/lib/server');
    if (Server) {
      fastifyConfig.createServer = (httpHandler, options = {}) => {
        const server = new Server(options);
        server.on('request', httpHandler);
        return server;
      };
    }
  } catch (e) {
    // Module unavailable
  }
}

export default fastifyConfig;

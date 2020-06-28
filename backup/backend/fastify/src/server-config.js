import fs from 'fs';

const { LOGGER, HTTPS, HTTP2, PURE } = process.env;

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

export default fastifyConfig;

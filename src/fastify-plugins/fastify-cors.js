import { corsWhitelist, cookie } from '../config';
import { hasKeyObj } from '../helpers';
import fastifyPlugin from 'fastify-plugin';

export default fastifyPlugin(async (fastify, options, next) => {
  fastify.addHook('onRequest', (req, res, next) => {
    const { headers, cookies } = req;
    const requestAllowedHeaders = headers['access-control-request-headers'];
    const { origin, host, vary } = headers;

    const isCredentialsInRequest = hasKeyObj(cookies) || headers.authorization;

    isCredentialsInRequest &&
      res.header('Access-Control-Allow-Credentials', 'true');
    requestAllowedHeaders &&
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, Accept, Content-Type, X-Requested-With'
      );

    if (vary) {
      const varyContent = [...vary.split(','), 'Origin'];
      res.header('Vary', varyContent.join(','));
    }

    if (corsWhitelist.includes(origin)) {
      return next();
    }

    if (origin === undefined) {
      if (host !== undefined) {
        const httpsOrigin = host.startsWith('https://')
          ? host
          : `https://${host}`;
        const httpOrigin = host.startsWith('http://') ? host : `http://${host}`;

        if (corsWhitelist.includes(httpsOrigin)) {
          return next();
        } else if (!cookie.secure && corsWhitelist.includes(httpOrigin)) {
          return next();
        }
      }
    }

    const err = new Error(
      `${
        !origin
          ? 'You trying access path with CURL or HTTP request app'
          : 'In server your request seems untrusted'
      }`
    );
    err.code = 'AccessDeniedByCORS';
    err.statusCode = 403;

    next(err);
  });
  next();
});

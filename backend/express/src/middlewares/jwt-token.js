import expressJwt from 'express-jwt';

// eslint-disable-next-line import/no-mutable-exports
let middleware = (_, res, next) => next();

if (process.env.TOKEN_SECRET) {
  middleware = expressJwt({
    secret: process.env.TOKEN_SECRET,
    algorithms: ['HS256'],
    getToken(req) {
      if (req && req.cookies && req.cookies.access_token) {
        return req.cookies.access_token;
      }
      return null;
    },
  }).unless({
    path: ['/', /\/assets\/(.*)/, '/api_docs', '/auth/login', '/auth/register'],
  });
}

export default middleware;

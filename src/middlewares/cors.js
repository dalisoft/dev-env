import { CORS_DOMAIN } from '../config';

export default (req, res) => {
  res.header('Access-Control-Allow-Origin', CORS_DOMAIN || '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, PUT, POST, PATCH, DELETE, OPTIONS'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );

  if (req.headers && req.headers.origin) {
    if (CORS_DOMAIN !== req.headers.origin) {
      return res.end(
        JSON.stringify({
          status: 'error',
          message: 'Declined by CORS'
        })
      );
    }
  }
  res.status(200).send({});
};

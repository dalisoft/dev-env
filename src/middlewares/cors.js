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
  res.status(200).send({});
};

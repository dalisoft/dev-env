import dotenv from 'dotenv-safe';

if (process.env.NODE_ENV === 'development' && !process.env.CORS_DOMAIN) {
  dotenv.config();
}

const { CORS_DOMAIN } = process.env;

export { CORS_DOMAIN };

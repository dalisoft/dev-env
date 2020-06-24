import dotenv from 'dotenv-safe';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

import dotenv from 'dotenv-safe';

const ALLOWED_ENV = ['development', 'test'];

if (ALLOWED_ENV.includes(process.env.NODE_ENV) && !process.env.TOKEN_SECRET) {
  dotenv.config(
    process.env.CI ? { example: '.env.example', allowEmptyValues: true } : {}
  );
}

import dotenv from 'dotenv-safe';
import console from 'consolemd';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
  console.log('!#green([*Server*]: started in *DEVELOPMENT* mode)');
}

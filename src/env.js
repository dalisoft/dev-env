import dotenvSafe from 'dotenv-safe';
import consolemd from 'consolemd';

if (process.env.NODE_ENV === 'development') {
  dotenvSafe.config();
  consolemd.log('!#green([*Server*]: started in *DEVELOPMENT* mode)');
}

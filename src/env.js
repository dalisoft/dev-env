import * as consolemd from './helpers/console';

if (process.env.NODE_ENV === 'development') {
  consolemd.log('!#green( [*Server*]: started in *DEVELOPMENT* mode )');

  if (!process.env.secretKey) {
    require('dotenv-safe').config();
  }
}

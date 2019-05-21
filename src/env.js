import dotenvSafe from 'dotenv-safe';
import * as consolemd from './helpers/console';

if (process.env.NODE_ENV === 'development') {
  // Zeit now can cause fail this method
  // So we just wrapped it within try/catch
  // To avoid error and avoid crash of server
  // Now.sh local server
  consolemd.log('!#green([*Server*]: started in *DEVELOPMENT* mode)');

  if (!process.env.secretKey) {
    try {
      dotenvSafe.config();
      consolemd.log('!#cyan([*Server*]: *ENV* variables are loaded)');
    } catch (e) {
      consolemd.log(
        '!#red([*Server*]: error while setting ENV variables, ' +
          'i think you using Zeit NOW hosting, don\'t worry, your backend still works)'
      );
    }
  }
}

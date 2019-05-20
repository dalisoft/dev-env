import dotenvSafe from 'dotenv-safe';
import { consolemd } from './helpers';

if (process.env.NODE_ENV === 'development') {
  // Zeit now can cause fail this method
  // So we just wrapped it within try/catch
  // To avoid error and avoid crash of server
  // Now.sh local server
  consolemd.log('!#green([*Server*]: started in *DEVELOPMENT* mode)');
  try {
    dotenvSafe.config({ allowEmptyValues: true });
  } catch (e) {
    consolemd.log(
      '!#red([*Server*]: error while setting ENV variables, ' +
        'i think you using Zeit NOW hosting, don\'t worry, your backend still works)'
    );
  }
}

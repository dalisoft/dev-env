import dotenvSafe from 'dotenv-safe';
import consolemd from 'consolemd';

if (process.env.NODE_ENV === 'development') {
  // Zeit now can cause fail this method
  // So we just wrapped it within try/catch
  // To avoid error and avoid crash of server
  // Now.sh local server
  try {
    dotenvSafe.config();
    consolemd.log('!#green([*Server*]: started in *DEVELOPMENT* mode)');
  } catch (e) {
    // Zeit now server failed
  }

  // Catch warnings at process
  typeof process !== 'undefined' &&
    process.on('warning', (warning) => {
      consolemd.log('!#yellow([*Server*]:)', warning.stack);
    });
}

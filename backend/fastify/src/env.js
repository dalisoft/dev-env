import dotenvSafe from 'dotenv-safe';

if (process.env.NODE_ENV === 'development') {
  // Zeit now can cause fail this method
  // So we just wrapped it within try/catch
  // To avoid error and avoid crash of server
  // Now.sh local server
  console.log('[Server]: started in DEVELOPMENT mode');

  if (!process.env.secretKey) {
    try {
      dotenvSafe.config();
      console.log('[Server]: ENV variables are loaded');
    } catch (e) {
      console.log(
        '[Server]: error while setting ENV variables, ' +
          'i think you using Vercel hosting, do not worry, your backend still works )'
      );
    }
  }
}

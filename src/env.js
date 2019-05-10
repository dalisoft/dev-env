import dotenvSafe from 'dotenv-safe';
import consolemd from 'consolemd';

if (process.env.NODE_ENV === 'development') {
  dotenvSafe.config();
  (process.env.ROLLUP_WATCH ? consolemd : console).log(
    '!#green([*Server*]: started in *DEVELOPMENT* mode)'
  );
}

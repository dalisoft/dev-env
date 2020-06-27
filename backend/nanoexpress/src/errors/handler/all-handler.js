import { consolemd } from '../../helpers/index.js';
import * as translations from '../translations/index.js';

export default (error, request, res) => {
  if (error.errors || error.code || error.statusCode) {
    res.status(error.statusCode || 500);

    const { code } = error;
    let { errors } = error;
    const { lang = 'en' } = request.headers;
    const map = translations[lang];

    if (errors && errors.length > 0) {
      map &&
        Object.keys(map).forEach((key) => {
          errors = errors.map((error) => {
            error.message = error.message.replace(
              new RegExp(key, 'g'),
              map[key]
            );
            return error;
          });
        });
    }

    return res.end(
      JSON.stringify({
        status: 'error',
        message:
          map.httpErrors[code] ||
          map.customErrors[code] ||
          map.httpErrors.BadRequest,
        errors
      })
    );
  }

  const stack = error.stack
    ? error.stack
        .split('\n')
        .map((e) => e.trim())
        .filter((e, i, s) => s.indexOf(e) === i)
    : error.stack_trace;

  consolemd.log('#red([*Server*]: error was happened', '\n');
  consolemd.log('#red(' + stack + ')');

  return res.end(
    JSON.stringify({
      status: 'error',
      message: 'Server error, please contact to server ',
      stack
    })
  );
};

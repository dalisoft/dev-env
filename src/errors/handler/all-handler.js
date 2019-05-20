import { consolemd } from '../../helpers';
import * as translations from '../translations';

export default async (error, request, res) => {
  if (
    error.validation ||
    error.code ||
    error.message.includes('is required') ||
    error.statusCode
  ) {
    res.status(error.statusCode || 500);

    const { message, code } = error;
    const { lang = 'en' } = request.headers;
    const map = translations[lang];
    let errors;

    if (message) {
      errors = message.split(', ');
      map &&
        Object.keys(map).forEach((key) => {
          errors = errors.map((m) => m.replace(new RegExp(key, 'g'), map[key]));
        });
    }

    return {
      status: 'error',
      message:
        map.httpErrors[code] ||
        map.customErrors[code] ||
        map.httpErrors.BadRequest,
      errors
    };
  }

  const stack = error.stack
    ? error.stack
      .split('\n')
      .map((e) => e.trim())
      .filter((e, i, s) => s.indexOf(e) === i)
    : error.stack_trace;

  consolemd.log('#red([*Server*]: error was happened', '\n');
  consolemd.log('#red(' + stack + ')');

  return {
    status: 'error',
    message: 'Server error, please contact to server ',
    stack
  };
};

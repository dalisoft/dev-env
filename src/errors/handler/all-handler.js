import * as translations from '../../translations';
import fs from 'fs';

export default (error, request, res) => {
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

    return res.send({
      status: 'error',
      message: map.httpErrors[code || 'BadRequest'],
      errors
    });
  }

  if (!fs.existsSync('./errors')) {
    fs.mkdirSync('./errors');
  }

  console
    .log({
      stack: error.stack
        ? error.stack
            .split('\n')
            .map((e) => e.trim())
            .filter((e, i, s) => s.indexOf(e) === i)
        : error.stack_trace,
      message: error.message,
      headers: request.headers,
      query: request.query,
      body: request.body,
      params: request.params
    })
    .then(() => {
      res.send({
        status: 'error',
        message: 'Server error, please contact to server '
      });
    });
};

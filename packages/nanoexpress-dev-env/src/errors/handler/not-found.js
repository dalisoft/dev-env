import * as translations from '../translations';

export default (request, response) => {
  const lang = request.getHeader('lang');
  const map = translations[lang];

  return response.end(
    JSON.stringify({
      status: 'error',
      code: 404,
      message: map.httpErrors.NotFound
    })
  );
};

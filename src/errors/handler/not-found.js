import * as translations from '../translations';

export default async (error, request) => {
  const { lang = 'en' } = request.headers;
  const map = translations[lang];

  return { status: 'error', code: 404, message: map.httpErrors.NotFound };
};

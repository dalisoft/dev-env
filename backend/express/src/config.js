const cookieTokenDefaults = {
  maxAge: 60 * 60 * 24 * 1000, // 1 day (24 hour)
  secure: process.env.NODE_ENV !== 'development', // Later we fix it
  httpOnly: true,
  sameSite: 'strict',
  path: '/',
  // domain: process.env.NODE_ENV === 'development' ? 'localhost' : '.my___server.ru'
};

// Convert into map
const cookies = {
  token: cookieTokenDefaults,
};

const { ADVANCED_ERROR_LAYER } = process.env;

export { cookies, ADVANCED_ERROR_LAYER };

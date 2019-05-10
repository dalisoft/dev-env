const { ALLOWED_DOMAIN } = process.env;

const CORS_DOMAIN = ALLOWED_DOMAIN || 'https://your-cors-domain.tld';

export { CORS_DOMAIN };

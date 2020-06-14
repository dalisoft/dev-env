import mapValues from 'lodash.mapvalues';

const createLinks = (links, base) => mapValues(links, (link) => `${base}${link}`);

// TODO: Set as your
export const api = createLinks(
  {
    getValues: 'get-values-of-something',
  },
  process.env.SERVER_URL
);

export const REsitekey = 'YOUR_RESITE_KEY';
export const DOMAIN = process.env.FRONT_URL;

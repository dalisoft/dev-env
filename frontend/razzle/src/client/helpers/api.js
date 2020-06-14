import mapValues from 'lodash.mapvalues';

const origin =
  typeof window !== 'undefined'
    ? window.location
    : typeof process !== 'undefined'
      ? process.env.ORIGIN
      : 'http://localhost:3000';

const createLinks = (links, base) =>
  mapValues(links, (link) => `${base}${link}`);

// TODO: Set as your
export const api = createLinks(
  {
    getValues: 'get-values-of-something'
  },
  origin
);

export const REsitekey = 'YOUR_RESITE_KEY';
export const DOMAIN = origin;

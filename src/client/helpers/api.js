import mapValues from 'lodash.mapvalues';

const { origin } = window.location;

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

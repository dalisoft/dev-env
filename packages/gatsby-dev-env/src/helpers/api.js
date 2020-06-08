import mapValues from "lodash.mapvalues";

const { SERVER_URL, FRONT_URL } = {};

const createLinks = (links, base) => mapValues(links, link => `${base}${link}`);

// TODO: Set as your
export const api = createLinks(
  {
    getValues: "get-values-of-something"
  },
  SERVER_URL
);

export const REsitekey = "YOUR_RESITE_KEY";
export const DOMAIN = FRONT_URL;

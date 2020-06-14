import mapValues from 'lodash.mapvalues';

const { REACT_APP_SERVER, REACT_APP_FRONT_URL } = process.env;

const createLinks = (links, base) => mapValues(links, link => `${base}${link}`);

// TODO: Set as your
export const api = createLinks(
	{
		getValues: 'get-values-of-something',
	},
	REACT_APP_SERVER
);

export const REsitekey = 'YOUR_RESITE_KEY';
export const DOMAIN = REACT_APP_FRONT_URL;

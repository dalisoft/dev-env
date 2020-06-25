/* eslint-disable no-continue, no-restricted-syntax, guard-for-in */
const normalizeProperties = ['body', 'params'];

export default (req, res, next) => {
  for (const property of normalizeProperties) {
    const value = req[property];

    for (const subProperty in value) {
      const subValue = value[subProperty];

      if (subValue === undefined || subValue === null) {
        continue;
      }

      if (subValue === 'null') {
        value[subProperty] = null;
      } else if (subValue === 'undefined') {
        value[subProperty] = undefined;
      }
    }
  }
  next();
};

const validationMethods = [
  'response',
  'query',
  'params',
  'cookies',
  'headers',
  'body'
];

export default (ajv, schema, config) => {
  const validation = [];
  if (schema) {
    validationMethods.forEach((type) => {
      const _schema = schema[type];
      if (typeof _schema === 'object' && _schema) {
        if (type === 'response') {
          schema[type] = JSON.stringify(_schema);
        } else {
          if (!ajv) {
            config.setAjv();
            ajv = config.ajv;
          }
          const validator = ajv.compile(_schema);
          schema[type] = validator;
          validation.push({ type, validator });
        }
      }
    });
  }
  return validation;
};

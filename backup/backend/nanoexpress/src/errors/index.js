import { allHandler, notFoundHandler } from './handler/index.js';

export default (app) => {
  app.setNotFoundHandler(notFoundHandler);
  app.setErrorHandler(allHandler);
  app.setValidationErrorHandler(allHandler);
};

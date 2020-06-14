import { allHandler, notFoundHandler } from './handler';

export default (app) => {
  app.setNotFoundHandler(notFoundHandler);
  app.setErrorHandler(allHandler);
  app.setValidationErrorHandler(allHandler);
};

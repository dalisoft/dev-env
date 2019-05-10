const app = require('../build/server');

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  // Run the request
  return await app.run(event, context);
};

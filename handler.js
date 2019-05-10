const app = require('./build/server');

// Declare your Lambda handler
module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  // Run the request
  return await app.run(event, context);
};

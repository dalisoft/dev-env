import app from '../src/server';

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  // Run the request
  return await app.run(event, context);
};

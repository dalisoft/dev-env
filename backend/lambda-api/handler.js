import app from './src/server';

// Declare your Lambda handler
export default async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  // Run the request
  return await app.run(event, context);
};

import awsServerlessExpress from 'aws-serverless-express';
import fastify from './src/server';

let server;
const serverFactory = (handler) => {
  server = awsServerlessExpress.createServer(handler);
  return server;
};

const app = fastify(serverFactory);

export const handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  app.ready((err) => {
    if (err) {
      return console.error(err.stack || err);
    }
    awsServerlessExpress.proxy(server, event, context, 'CALLBACK', callback);
  });
};

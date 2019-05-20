import { ApolloServer } from 'apollo-server-lambda';
import schema from './src/graphql/schema';
import { graphiql, corsWhitelist } from './src/config.js';

// Create instance
const server = new ApolloServer({
  schema,
  playground: graphiql && { version: '1.7.25' },
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
});

const handler = server.createHandler({ origin: corsWhitelist });

export default (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!event.queryStringParameters) {
    event.queryStringParameters = {};
  }

  handler(event, context, callback);
};

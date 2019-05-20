import { ApolloServer } from 'apollo-server-lambda';
import schema from '../src/graphql/schema';
import { graphiql, corsWhitelist } from '../src/config.js';

// Create instance
const server = new ApolloServer({
  schema,
  playground: graphiql && { version: '1.7.25' }
});

exports.handler = server.createHandler({ origin: corsWhitelist });

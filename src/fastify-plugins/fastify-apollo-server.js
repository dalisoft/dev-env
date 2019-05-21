import { ApolloServer } from 'apollo-server-fastify';
import schema from '../graphql/schema';
import { dev, graphiql, corsWhitelist } from '../config.js';

export default async (fastify) => {
  // Create instance
  const apollo = new ApolloServer({
    schema,
    playground: graphiql && { version: '1.7.25' }
  });

  // Add subscription support
  if (fastify.server) {
    apollo.installSubscriptionHandlers(fastify.server);
  }

  let path = '';
  if (process.env.NETLIFY_ENV) {
    if (dev) {
      path = '/graphql';
    } else {
      path = '.netlify/functions/graphql';
    }
  } else {
    path = '/graphql';
  }

  return fastify.register(
    apollo.createHandler({
      path,
      cors: {
        origin: [...corsWhitelist], // Avoid side-effects as this variable can be used elsewhere
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Origin', 'Accept'],
        credentials: true
      }
    })
  );
};

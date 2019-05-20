import { ApolloServer } from 'apollo-server-fastify';
import schema from '../graphql/schema';
import { dev, corsWhitelist } from '../config.js';

export default async (fastify) => {
  // Create instance
  const apollo = new ApolloServer({
    schema,
    playground: dev && { version: '1.7.25' }
  });

  // Add subscription support
  apollo.installSubscriptionHandlers(fastify.server);

  return fastify.register(apollo.createHandler({ origin: corsWhitelist }));
};

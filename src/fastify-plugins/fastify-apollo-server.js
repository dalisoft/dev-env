import { ApolloServer } from 'apollo-server-fastify';
import schema from '../graphql/schema';
import { dev } from '../config.js';

export default (fastify, { prefix = '' } = {}) => {
  const apollo = new ApolloServer({
    schema,
    playground: dev && { version: '1.7.25' }
  });
  // Add subscription support
  apollo.installSubscriptionHandlers(fastify.server);

  console.log('Logged graphql path', { path: prefix + '/graphql' });

  return fastify.register(apollo.createHandler({ path: prefix + '/graphql' }));
};

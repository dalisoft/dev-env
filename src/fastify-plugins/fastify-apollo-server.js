import { ApolloServer } from 'apollo-server-fastify';
import schema from '../graphql/schema';

export default async (fastify) => {
  const server = new ApolloServer({
    schema,
    playground: { version: '1.7.25' }
  });
  fastify.register(server.createHandler());
};

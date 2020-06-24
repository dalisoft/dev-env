import GraphQL from 'graphql';

export default {
  type: GraphQL.GraphQLString,
  resolve() {
    return 'world';
  }
};

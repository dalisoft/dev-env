import GraphQL from 'graphql';

import * as queries from './queries/index.js';
import * as mutations from './mutations/index.js';

import { hasKeyObj } from '../helpers/index.js';

const schema = new GraphQL.GraphQLSchema({
  query: hasKeyObj(queries)
    ? new GraphQL.GraphQLObjectType({
        name: 'RootQueryType',
        fields: queries
      })
    : undefined,
  mutation: hasKeyObj(mutations)
    ? new GraphQL.GraphQLObjectType({
        name: 'RootMutationType',
        fields: mutations
      })
    : undefined
});

export { schema as default, queries as query, mutations as mutation };

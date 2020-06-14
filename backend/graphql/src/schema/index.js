import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import * as queries from './queries';
import * as mutations from './mutations';

import { hasKeyObj } from '../helpers';

const schema = new GraphQLSchema({
  query: hasKeyObj(queries)
    ? new GraphQLObjectType({
      name: 'RootQueryType',
      fields: queries
    })
    : undefined,
  mutation: hasKeyObj(mutations)
    ? new GraphQLObjectType({
      name: 'RootMutationType',
      fields: mutations
    })
    : undefined
});

export { schema as default, queries as query, mutations as mutation };

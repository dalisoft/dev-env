import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import * as queries from './queries';
import * as mutations from './mutations';
import * as subscriptions from './subscriptions';

import { hasKeyObj } from '../../helpers';

const schema = new GraphQLSchema({
  query: hasKeyObj(queries)
    ? new GraphQLObjectType({
      name: 'Query',
      fields: queries
    })
    : undefined,
  mutation: hasKeyObj(mutations)
    ? new GraphQLObjectType({
      name: 'Mutation',
      fields: mutations
    })
    : undefined,
  subscription: hasKeyObj(subscriptions)
    ? new GraphQLObjectType({
      name: 'Subscription',
      fields: subscriptions
    })
    : undefined
});

export { schema as default, queries as query, mutations as mutation };

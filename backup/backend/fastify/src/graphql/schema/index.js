/* eslint-disable indent */
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import * as queries from './queries/index.js';
import * as mutations from './mutations/index.js';
import * as subscriptions from './subscriptions/index.js';

import { hasKeyObj } from '../../helpers/index.js';

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

import { GraphQLString } from 'graphql';
import pubsub from '../../pubsub';
import { HELLO } from '../../pubsub_constants';

export default {
  type: GraphQLString,
  // eslint-disable-next-line no-unused-vars
  subscribe: (_, data, ctx) => pubsub.asyncIterator([HELLO])
};

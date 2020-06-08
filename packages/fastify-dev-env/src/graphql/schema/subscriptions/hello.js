import { GraphQLString } from 'graphql';
import pubsub from '../../pubsub';
import { HELLO } from '../../pubsub_constants';

// Uncomment here if you want test subscription
/* setInterval(() => {
  pubsub.publish(HELLO, { hello: 'Hello world at ' + Date.now() });
}, 1000); */

export default {
  type: GraphQLString,
  // eslint-disable-next-line no-unused-vars
  subscribe: (_, data, ctx) => pubsub.asyncIterator(HELLO)
};

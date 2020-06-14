import { GraphQLString } from 'graphql';
import pubsub from '../../pubsub';
import { HELLO } from '../../pubsub_constants';

export default {
  type: GraphQLString,
  resolve() {
    pubsub.publish(HELLO, { hello: 'Hello world at ' + Date.now() });
    return 'Hello world';
  }
};

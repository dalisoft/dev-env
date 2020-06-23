import { connect } from 'redaction';
import Counter from './Counter';

const enhance = connect({ counter: 'counter.counter' });

export default enhance(Counter);

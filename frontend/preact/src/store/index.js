import createStore from 'unistore';
import actions from './actions';

const store = createStore({
  counter: 0,
  locale: 'en'
});

export { store, actions };

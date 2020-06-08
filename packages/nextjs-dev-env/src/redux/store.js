import { createStore, combineReducers } from 'redaction';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { unstable_batchedUpdates } from 'react-dom';
import { reducer as form } from 'redux-form';
import reducers from './_reducers';

let win = {};

if (typeof window !== 'undefined') {
  win = window;
}
export const store = createStore({
  initialState: win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__(),
  reducers: {
    ...combineReducers(reducers),
    form,
  },
  enhancers: [batchedSubscribe(unstable_batchedUpdates)],
});

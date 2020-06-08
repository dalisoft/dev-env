import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { createStore, combineReducers } from 'redaction';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { unstable_batchedUpdates } from 'react-dom';
import { reducer as form } from 'redux-form';
import reducers from './_reducers';

export const history =
  typeof window === 'undefined'
    ? createMemoryHistory()
    : createBrowserHistory();

export const store = createStore({
  // eslint-disable-next-line
  initialState:
    typeof window !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : {},
  reducers: {
    ...combineReducers(reducers),
    router: connectRouter(history),
    form
  },
  middleware: [routerMiddleware(history)],
  enhancers: [batchedSubscribe(unstable_batchedUpdates)]
});

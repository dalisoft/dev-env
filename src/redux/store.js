import { createReduxHistoryContext, reachify } from 'redux-first-history';
import createBrowserHistory from 'history/createBrowserHistory';
import { createStore, combineReducers } from 'redaction';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { unstable_batchedUpdates } from 'react-dom';
import { reducer as form } from 'redux-form';
import reducers from './_reducers';

if (typeof document === 'undefined') {
  global.window = {}; // Fix for react-static window env
}

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  //others options if needed
});

export const store = createStore({
  initialState: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  reducers: {
    ...combineReducers(reducers),
    router: routerReducer,
    form,
  },
  middleware: [routerMiddleware],
  enhancers: [batchedSubscribe(unstable_batchedUpdates)],
});

export const history = createReduxHistory(store);
//if you use @reach/router
export const reachHistory = reachify(history);

import { routerReducer as router, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { createStore, combineReducers } from 'redaction';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { unstable_batchedUpdates } from 'react-dom';
import { reducer as form } from 'redux-form';
import reducers from './_reducers';

let getUserConfirmation;

export const setUserConfirmation = callback => {
	getUserConfirmation = callback;
};
export const history = createBrowserHistory({
	get() {
		return getUserConfirmation;
	},
});

export const store = createStore({
	initialState: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	reducers: {
		...combineReducers(reducers),
		router,
		form,
	},
	middleware: [routerMiddleware(history)],
	enhancers: [batchedSubscribe(unstable_batchedUpdates)],
});

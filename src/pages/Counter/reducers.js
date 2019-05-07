import * as commonReducers from '../../helpers/commonReducers';

import { counter } from 'redux/rest'; // TODO: if this is Async, should be called within `componentDidMount`

const initialState = {
	counter: counter.getInitialValue(),
};

const increment = ({ counter }) => ({
	counter: counter + 1,
});
const decrement = ({ counter }) => ({
	counter: counter - 1,
});
const reset = () => ({ counter: 0 });

export default {
	initialState,
	increment,
	decrement,
	reset,
	...commonReducers,
};

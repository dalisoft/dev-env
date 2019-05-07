import * as commonReducers from '../../helpers/commonReducers';

import { getInitialValue } from 'modules/counter'; // TODO: if this is Async, should be called within `componentDidMount`

const initialState = {
	counter: getInitialValue(),
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

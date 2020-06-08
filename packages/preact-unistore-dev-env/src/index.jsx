import 'core-js'; // polyfills for ios 9
import intl from 'intl';
import { Provider } from 'unistore/preact';
import App from './containers/App';
import { store } from './store';

import './index.css';

global.Intl = intl; // polyfill for ios 9

const AppWrapped = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default AppWrapped;

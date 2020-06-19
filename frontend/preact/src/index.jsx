import 'intl';
import { Provider } from 'unistore/preact';
import App from './containers/App';
import { store } from './store';

import './index.css';

const AppWrapped = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default AppWrapped;

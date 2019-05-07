import React from 'react';
import { Route } from 'react-router-dom';

import Routes from '../routes.jsx';
import Root from './Root';
// import { user } from 'redux/actions'; TODO:
// import { connect } from 'redaction';

const App = React.memo(({ locale = 'en' }) => {
	if (!locale) {
		// locale = user.processedLocal();
	}
	return (
		<Root locale={locale}>
			<Route component={Routes} />
		</Root>
	);
});

export default App;

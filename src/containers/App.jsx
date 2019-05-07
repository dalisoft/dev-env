import React from 'react';
import { Route } from 'react-router-dom';

import Routes from '../routes.jsx';
import Root from './Root';
import { connect } from 'redaction';

const App = React.memo(({ locale }) => {
	return (
		<Root locale={locale}>
			<Route component={Routes} />
		</Root>
	);
});

const enhance = connect({ locale: 'init.locale' });

export default enhance(App);

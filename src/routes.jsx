import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Counter } from 'pages';

import { PageLayout } from 'components/layouts';

const Routes = ({ someCondition }) =>
	someCondition ? (
		<PageLayout>
			<Switch>
				<Route exact path="/*" render={() => 'Some condition was passed'} />
			</Switch>
		</PageLayout>
	) : (
		<PageLayout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/counter" component={Counter} />
				<Route exact path="/*" render={() => 'Not Found'} />
			</Switch>
		</PageLayout>
	);

export default Routes;

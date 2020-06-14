import { Router } from 'preact-router';

import { Home, Counter, NotFound } from './pages';

import { PageLayout } from './components/layouts';

const SomeConditionPath = () => 'Some condition was passed';

const Routes = ({ someCondition }) =>
	someCondition ? (
		<PageLayout>
			<Router>
				<SomeConditionPath path="/" />
				<NotFound exact path="/*" />
			</Router>
		</PageLayout>
	) : (
		<PageLayout>
			<Router>
				<Home exact path="/" />
				<Counter exact path="/counter" />
				<NotFound exact path="/*" />
			</Router>
		</PageLayout>
	);

export default Routes;

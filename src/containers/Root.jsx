import React, { PureComponent } from 'react';
import { ConnectedRouter as Router } from 'react-router-redux';
import PropTypes from 'prop-types';

import { IntlProvider } from './IntlProvider';
import { history } from 'redux/store';

export default class Root extends PureComponent {
	componentDidMount() {
		if (window.netlifyIdentity) {
			window.netlifyIdentity.on('init', user => {
				if (!user) {
					window.netlifyIdentity.on('login', () => {
						document.location.href = '/admin/';
					});
				}
			});
		}
	}
	render() {
		const { locale, children } = this.props;

		return (
			<IntlProvider locale={locale}>
				<Router history={history}>{children}</Router>
			</IntlProvider>
		);
	}
}

Root.propTypes = {
	children: PropTypes.any,
};

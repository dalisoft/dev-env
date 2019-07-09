import React, { PureComponent } from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import PropTypes from 'prop-types';

import { IntlProvider } from './IntlProvider';
import { history } from '../redux/store';

export default class Root extends PureComponent {
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
  locale: PropTypes.string,
  children: PropTypes.any
};

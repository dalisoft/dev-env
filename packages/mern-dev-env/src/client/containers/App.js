import React from 'react';
import { Route } from 'react-router-dom/esm/react-router-dom.js';

import Routes from '../routes';
import Root from './Root';
import { connect } from 'redaction';

const App = React.memo((props) => {
  return (
    <Root {...props}>
      <Route component={Routes} />
    </Root>
  );
});

App.displayName = 'App';

const enhance = connect({ locale: 'init.locale' });

export default enhance(App);

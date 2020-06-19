import 'intl';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../client/containers/App';
import { store } from '../client/redux/store';
import * as serviceWorker from '../client/serviceWorker';

import '../client/index.css';

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept();
}

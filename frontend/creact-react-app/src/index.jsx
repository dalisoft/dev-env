import 'core-js'; // polyfills for ios 9
import intl from 'intl';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { store } from 'redux/store';
import * as serviceWorker from './serviceWorker';

import './index.css';

global.Intl = intl; // polyfill for ios 9

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

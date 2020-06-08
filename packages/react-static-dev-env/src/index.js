import intl from 'intl';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';
import { store } from './redux/store';

// Your top level component
import App from './App';

global.Intl = intl; // polyfill for ios 9

// Export your top level component as JSX (for static rendering)
export default (props) => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
);

// Render your app
if (typeof document !== 'undefined') {
  const target = document.getElementById('root');

  const renderMethod = target.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

  const render = (Comp) => {
    renderMethod(
      <Provider store={store}>
        <AppContainer>
          <Comp />
        </AppContainer>
      </Provider>,
      target
    );
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App);
    });
  }
}

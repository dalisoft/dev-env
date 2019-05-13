import React from 'react';
import { Root, Routes } from 'react-static';
import { connect } from 'redaction';

import { IntlProvider } from './IntlProvider';

import { Link, Router } from 'components/Router';

import './app.css';

const LanguageProvider = connect({ locale: 'init.locale' })(({ locale, children }) => (
  <IntlProvider locale={locale}>{children}</IntlProvider>
));

const App = ({ HotLoader, Provider, store }) => {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <Root>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/counter">Counter</Link>
          </nav>
          <HotLoader>
            <div className="content">
              <React.Suspense fallback={<em>Loading...</em>}>
                <Router>
                  <Routes path="*" />
                </Router>
              </React.Suspense>
            </div>
          </HotLoader>
        </Root>
      </LanguageProvider>
    </Provider>
  );
};

export default App;

import React from 'react';
import { Root, Routes } from 'react-static';
import { connect } from 'react-redux';

import IntlProvider from './IntlProvider';

import { Link, Router } from 'components/Router';

import './app.css';

const enhance = connect(({ init }) => ({ locale: init.locale }));
const LanguageProvider = enhance(({ locale, children }) => <IntlProvider locale={locale}>{children}</IntlProvider>);

const App = () => {
  return (
    <LanguageProvider>
      <Root>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
        </nav>
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </Root>
    </LanguageProvider>
  );
};

export default App;

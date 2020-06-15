import intl from 'intl';
import App from 'next/app';
import React from 'react';
import { store } from '../redux/store';
import { Provider, connect } from 'react-redux';
import IntlProvider from '../components/IntlProvider';

import { PageLayout } from '../components/layouts'; // ios 9 safari fix
import './global.css';

global.Intl = intl;

const enhance = connect(({ init }) => ({ locale: init.locale }));
const LanguageProvider = enhance(({ locale, children }) => <IntlProvider locale={locale}>{children}</IntlProvider>);

class ReduxConnect extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <PageLayout>
        <Provider store={store}>
          <LanguageProvider>
            <Component {...pageProps} />
          </LanguageProvider>
        </Provider>
      </PageLayout>
    );
  }
}

export default ReduxConnect;

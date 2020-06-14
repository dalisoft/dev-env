import intl from 'intl';
import App, { Container } from 'next/app';
import React from 'react';
import { store } from '../redux/store';
import { Provider, connect } from 'react-redux';
import IntlProvider from '../components/IntlProvider';

import { PageLayout } from '../components/layouts';

global.Intl = intl; // ios 9 safari fix

const enhance = connect(({ init }) => ({ locale: init.locale }));
const LanguageProvider = enhance(({ locale, children }) => <IntlProvider locale={locale}>{children}</IntlProvider>);

class ReduxConnect extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <PageLayout>
          <Provider store={store}>
            <LanguageProvider>
              <Component {...pageProps} />
            </LanguageProvider>
          </Provider>
        </PageLayout>
      </Container>
    );
  }
}

export default ReduxConnect;

import 'intl';
import React from 'react';
import { Provider, connect } from 'react-redux';
import { store } from './redux/store';
import IntlProvider from './components/IntlProvider';

const enhance = connect(({ init }) => ({ locale: init.locale }));
const LanguageProvider = enhance(({ locale, children }) => <IntlProvider locale={locale}>{children}</IntlProvider>);

const Wrap = ({ children }) => (
  <Provider store={store}>
    <LanguageProvider>{children}</LanguageProvider>
  </Provider>
);

export default Wrap;

import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import uz from 'react-intl/locale-data/uz';
import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/ru.js';
import 'intl/locale-data/jsonp/uz.js';

import { flatten } from '../helpers';
import messages from '../translations';

addLocaleData([...en, ...ru, ...uz]);

const IntlProviderWrapper = ({ children, locale }) => {
  return (
    <IntlProvider locale={locale} messages={flatten(messages[locale])}>
      {children}
    </IntlProvider>
  );
};

export default IntlProviderWrapper;

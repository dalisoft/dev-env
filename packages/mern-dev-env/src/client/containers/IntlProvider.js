import React from 'react';
import { IntlProvider as Provider } from 'react-intl';
import PropTypes from 'prop-types';

import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/ru.js';
import 'intl/locale-data/jsonp/uz.js';

import { flatten } from '../helpers';
import messages from '../translations';

if (!Intl.PluralRules) {
  import('@formatjs/intl-pluralrules/polyfill');
  import('@formatjs/intl-pluralrules/dist/locale-data/en');
  import('@formatjs/intl-pluralrules/dist/locale-data/ru');
  import('@formatjs/intl-pluralrules/dist/locale-data/uz');
}
if (!Intl.RelativeTimeFormat) {
  import('@formatjs/intl-relativetimeformat/polyfill');
  import('@formatjs/intl-relativetimeformat/dist/locale-data/en');
  import('@formatjs/intl-relativetimeformat/dist/locale-data/ru');
  import('@formatjs/intl-relativetimeformat/dist/locale-data/uz');
}

export const IntlProvider = ({ children, locale }) => {
  return (
    <Provider locale={locale} messages={flatten(messages[locale])}>
      {children}
    </Provider>
  );
};

IntlProvider.propTypes = {
  children: PropTypes.any,
  locale: PropTypes.string
};

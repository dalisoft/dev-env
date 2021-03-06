import React from 'react';
import { IntlProvider as Provider } from 'react-intl';

import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/ru.js';
import 'intl/locale-data/jsonp/uz.js';

import { flatten } from 'helpers';
import messages from 'translations';

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/dist/locale-data/en');
  require('@formatjs/intl-pluralrules/dist/locale-data/ru');
  require('@formatjs/intl-pluralrules/dist/locale-data/uz');
}
if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/en');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/ru');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/uz');
}

export const IntlProvider = ({ children, locale }) => {
  return (
    <Provider locale={locale} messages={flatten(messages[locale])}>
      {children}
    </Provider>
  );
};

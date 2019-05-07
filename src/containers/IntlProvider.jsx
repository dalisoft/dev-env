import React from 'react';
import { IntlProvider as Provider, addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import id from 'react-intl/locale-data/id';
import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/ru.js';
import 'intl/locale-data/jsonp/id.js';

import { flatten } from 'helpers';
import messages from 'translations';

addLocaleData([...en, ...ru, ...id]);

export const IntlProvider = React.memo(({ children, locale }) => {
	// console.log(locale)

	return (
		<Provider locale={locale} messages={flatten(messages[locale])}>
			{children}
		</Provider>
	);
});

import React from 'react';
import classNames from 'classnames';
import reducers from 'redux/reducers';
import { connect } from 'redaction';

import style from './style.module.css';

const LangSwitcher = ({ locale }) => (
	<div className={style.switcherContainer}>
		<span
			className={classNames(style.switcher, {
				[style.active]: locale === 'en',
			})}
			onClick={() => reducers.init.setLocale('en')}
		>
			Set lang as English
		</span>
		<span
			className={classNames(style.switcher, {
				[style.active]: locale === 'ru',
			})}
			onClick={() => reducers.init.setLocale('ru')}
		>
			Set lang as Russian
		</span>
		<span
			className={classNames(style.switcher, {
				[style.active]: locale === 'uz',
			})}
			onClick={() => reducers.init.setLocale('uz')}
		>
			Set lang as Uzbek
		</span>
	</div>
);

const enhance = connect({ locale: 'init.locale' });

export default enhance(React.memo(LangSwitcher));

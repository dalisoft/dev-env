import classNames from 'classnames';
import { actions } from '../../../store';
import { connect } from 'unistore/preact';

import style from './style.module.css';

const LanguageSwitcher = ({ locale, ...actions }) => {
	function handleLanguageChange(lang) {
		return (e) => {
			actions.setLocale(lang);
		};
	}

	return (
		<div className={style.switcherContainer}>
			<span
				className={classNames(style.switcher, {
					[style.active]: locale === 'en'
				})}
				onClick={handleLanguageChange('en')}
			>
				Set lang as English
			</span>
			<span
				className={classNames(style.switcher, {
					[style.active]: locale === 'ru'
				})}
				onClick={handleLanguageChange('ru')}
			>
				Set lang as Russian
			</span>
			<span
				className={classNames(style.switcher, {
					[style.active]: locale === 'uz'
				})}
				onClick={handleLanguageChange('uz')}
			>
				Set lang as Uzbek
			</span>
		</div>
	);
};

export default connect(
	'locale',
	actions
)(LanguageSwitcher);

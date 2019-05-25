import { css } from 'docz-plugin-css';

export default {
	title: 'Preact Unistore Dev-Env',
	codeSandbox: false,
	typescript: false,
	propsParser: true,
	wrapper: 'src/wrap-el.docs.jsx',
	dest: './build/docs/',
	plugins: [
		css({
			preprocessor: 'postcss',
			cssmodules: true
		}),
		css({
			preprocessor: 'sass',
			cssmodules: true
		})
	],
	onCreateWebpackChain: (config) => {
		config.devServer.hot = false;
		return config;
	}
};

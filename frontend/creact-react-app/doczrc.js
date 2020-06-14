import { css } from 'docz-plugin-css';
import path from 'path';

export default {
  title: 'CRA Modified',
  codeSandbox: false,
  typescript: false,
  propsParser: true,
  wrapper: 'src/wrap-el.docs.jsx',
  dest: './build/docs/',
  onCreateWebpackChain: (config) => {
    if (config.resolve.alias.set) {
      config.resolve.alias.set('redux', path.join(__dirname, 'src', 'redux'));
      config.resolve.alias.set('components', path.join(__dirname, 'src', 'components'));
      config.resolve.alias.set('pages', path.join(__dirname, 'src', 'pages'));
      config.resolve.alias.set('modules', path.join(__dirname, 'src', 'modules'));
      config.resolve.alias.set('helpers', path.join(__dirname, 'src', 'helpers'));
    }
  },
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true,
    }),
    css({
      preprocessor: 'sass',
      cssmodules: true,
    }),
  ],
};

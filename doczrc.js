import { css } from 'docz-plugin-css';

export default {
  title: 'CRA Modified',
  codeSandbox: false,
  typescript: false,
  propsParser: true,
  wrapper: 'src/wrap-el.test.jsx',
  dest: './docs/',
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

import { css } from 'docz-plugin-css';

export default {
  title: 'React Static Modified',
  codeSandbox: false,
  typescript: false,
  propsParser: true,
  wrapper: 'src/wrap-el.docs',
  dest: './build/docs/',
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

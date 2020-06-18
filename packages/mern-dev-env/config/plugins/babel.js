import babel from 'rollup-plugin-babel';

import pkg from '.../../package.json';

import { dev, watch } from '../env';

const ENV = dev && watch ? 'development' : 'production';

export default babel({
  runtimeHelpers: true,
  exclude: 'node_modules/**',
  babelrc: false,
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: pkg.browserslist[ENV]
      }
    ],
    '@babel/preset-react'
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
  sourceMaps: false
});

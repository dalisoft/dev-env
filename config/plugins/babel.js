import babel from 'rollup-plugin-babel';

import browserlist from '../browserlistrc';

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
        targets: browserlist[ENV]
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ],
  sourceMaps: false
});

import babel from '@rollup/plugin-babel';
import { dev, watch } from '../env';
import pkg from '../../package.json';

export default babel({
  exclude: 'node_modules/**',
  babelrc: false,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: pkg.browserslist[dev && watch ? 'development' : 'production']
      }
    ],
    '@babel/preset-react'
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
  sourceMaps: watch ? 'both' : 'false'
});

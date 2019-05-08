import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import run from 'rollup-plugin-run';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const dev = process.env.ROLLUP_WATCH === 'true';

export default {
  input: './src/server.js',
  output: {
    format: 'cjs',
    file: './build/server.js',
    esModule: false,
  },
  external: Object.keys(pkg.dependencies).concat(['fs']),
  plugins: [
    commonjs({
      sourceMap: false,
    }),
    resolve({
      mainFields: ['module', 'main'],
    }),
    !dev &&
      babel({
        babelrc: true,
        exclude: 'node_modules/**',
      }),
    dev
      ? run()
      : terser({
        compress: true,
        mangle: true,
      }),
  ],
};

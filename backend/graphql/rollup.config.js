import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import run from 'rollup-plugin-run';

import pkg from './package.json';

const dev = process.env.NODE_ENV === 'development';

export default {
  input: './src/server.js',
  output: {
    format: 'cjs',
    file: './build/server.js',
    esModule: false
  },
  external: Object.keys(pkg.dependencies),
  plugins: [
    commonjs({
      sourceMap: false,
      exclude: ['node_modules/graphql']
    }),
    resolve({
      mainFields: ['module', 'main'],
      extensions: ['.mjs', '.js', '.json']
    }),
    dev && run()
  ]
};

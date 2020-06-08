import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import run from 'rollup-plugin-run';

import external from '../externals';
import globals from '../globals';
import * as plugins from '../plugins/index';
import { dev, watch } from '../env';

export default {
  input: './src/server/index.js',
  output: {
    format: 'cjs',
    file: './build/server.js',
    esModule: false,
    sourceMap: false,
    globals
  },
  external,
  plugins: [
    ...Object.values(plugins),
    resolve({
      mainFields: ['module', 'main'],
      exclude: 'node_modules/**',
      preferBuiltins: true
    }),
    commonjs({
      sourceMap: false,
      namedExports: {
        'node_modules/react-dom/server.js': [ 'renderToString' ]
      }
    }),
    dev && watch && run()
  ]
};

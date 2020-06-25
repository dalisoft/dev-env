import resolve from '@rollup/plugin-node-resolve';
import run from '@rollup/plugin-run';

import external from '../externals';
import globals from '../globals';
import * as plugins from '../plugins/index';
import { dev, watch } from '../env';

export default {
  input: './src/server/server.js',
  output: {
    format: 'esm',
    dir: './build',
    // file: './build/server.js',
    esModule: false,
    sourceMap: watch,
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
    dev && watch && run()
  ]
};

import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import run from 'rollup-plugin-run';

import pkg from './package.json';

const dev = process.env.NODE_ENV === 'development';
const watch = process.env.ROLLUP_WATCH;

export default {
  input: './src/server.js',
  output: {
    format: 'cjs',
    file: './build/server.js',
    esModule: false
  },
  external: Object.keys(pkg.dependencies)
    .concat(Object.keys(pkg.devDependencies))
    .concat([
      'console',
      'consolemd',
      'crypto',
      'fs',
      'events',
      'url',
      'http',
      'https',
      'http2',
      'path',
      'os',
      'stream',
      'tls',
      'net',
      'zlib'
    ]),
  plugins: [
    resolve({
      mainFields: ['module']
    }),
    commonjs({
      sourceMap: false
    }),
    dev && watch && run()
  ]
};

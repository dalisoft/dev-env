import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

import pkg from './package.json';

const builtinModules = ['http', 'fs', 'xmlbuilder', 'util', 'querystring'];
const external = Object.keys(pkg.dependencies)
  .concat(Object.keys(pkg.devDependencies))
  .concat(builtinModules);

export default {
  input: './src/http-server.js',
  output: {
    file: './build/http-server.js',
    format: 'cjs'
  },
  external,
  plugins: [resolve({ preferBuiltins: true }), commonjs(), json()]
};

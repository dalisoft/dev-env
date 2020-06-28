import pkg from './package.json';
import run from '@rollup/plugin-run';

const builtinPackages = ['http', 'https', 'fs', 'querystring'];
const external = []
  .concat(Object.keys(pkg.dependencies))
  .concat(builtinPackages);

console.log(external);

export default {
  input: './src/http-server.js',
  output: {
    file: './build/http-server.js',
    format: 'cjs'
  },
  external,
  plugins: [run()]
};

import pkg from './package.json';
import run from '@rollup/plugin-run';

const builtinPackages = [
  'http',
  'https',
  'fs',
  'querystring',
  'crypto',
  'ws/lib/websocket-server.js'
];
const external = []
  .concat(Object.keys(pkg.dependencies))
  .concat(builtinPackages);

console.log(external);

export default {
  input: './src/server.js',
  output: {
    file: './build/server.js',
    format: 'cjs',
    sourcemaps: true
  },
  external,
  plugins: [run()]
};

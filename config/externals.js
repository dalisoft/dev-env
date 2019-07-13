import pkg from '../package.json';
import globals from './globals';

export default Object.keys(pkg.dependencies)
  .concat(Object.keys(pkg.devDependencies))
  .concat(Object.keys(globals))
  .concat([
    'intl',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/ru.js',
    'intl/locale-data/jsonp/uz.js',
    'react-intl',
    'react-intl/locale-data/en',
    'react-intl/locale-data/ru',
    'react-intl/locale-data/uz',
    'core-js',
    'react-dom/server',
    'prop-types',
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
  ]);

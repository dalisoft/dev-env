const path = require('path');
const dotenv = require('dotenv-safe');
const webpack = require('webpack');

const dev = process.env.NODE_ENV === 'development';

if (dev) {
  dotenv.config({ allowEmptyValues: true });
}

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: dev ? 'eval-source-map' : 'none',
  devServer: {
    proxy: {
      '/.netlify': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/.netlify/functions': '' }
      }
    }
  },
  module: {
    rules: []
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.APP_ROOT_PATH': JSON.stringify('/'),
      'process.env.NETLIFY_ENV': true
    })
  ]
};

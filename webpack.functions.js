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
  module: {
    rules: [
      {
        test: /.*/,
        include: path.resolve('./node_modules/echomd/js'),
        loader: 'shebang-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.APP_ROOT_PATH': JSON.stringify('/'),
      'process.env.NETLIFY_ENV': true
    })
  ]
};

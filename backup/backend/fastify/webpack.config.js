const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  output: {
    path: path.resolve('./.webpack/service'),
    filename: 'handler.js',
    libraryTarget: 'commonjs-module'
  },
  // Generate sourcemaps for proper error messages
  devtool: isDev ? 'source-map' : 'none',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals()],
  mode: isDev ? 'development' : 'production',
  optimization: {
    // We no not want to minimize our code.
    minimize: !isDev
  },
  performance: {
    // Turn off size warnings for entry points
    hints: isDev
  },
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: []
  }
};

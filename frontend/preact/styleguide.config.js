const path = require('path');
const preactCliWebpackConfig = require('preact-cli/lib/lib/babel-config');

module.exports = {
  components: 'src/components/**/[A-Z]*.jsx',
  styleguideComponents: {
    Wrapper: path.resolve('src/styleguide.wrapper')
  },
  webpackConfig: {
    resolveLoader: {
      alias: {
        'proxy-loader': require.resolve(
          'preact-cli/lib/lib/webpack/proxy-loader'
        ),
        'style-loader': require.resolve('preact-cli/node_modules/style-loader'),
        'css-loader': require.resolve('preact-cli/node_modules/css-loader')
      }
    },
    resolve: {
      alias: {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
        // Must be below test-utils
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: preactCliWebpackConfig()
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules'
        }
      ]
    }
  }
};

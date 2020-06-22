const path = require('path');

module.exports = {
  components: 'src/client/components/**/[A-Z]*.jsx',
  styleguideComponents: {
    Wrapper: path.resolve('src/client/styleguide.wrapper')
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
};

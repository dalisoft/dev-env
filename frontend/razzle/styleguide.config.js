const path = require('path');

const postCssOptions = {
  ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
};

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
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-razzle']
          }
        },
        {
          test: /\.css$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                modules: { auto: true }
              }
            },
            {
              loader: require.resolve('postcss-loader'),
              options: postCssOptions
            }
          ]
        }
      ]
    }
  }
};

const path = require("path")

module.exports = {
  components: "src/components/**/[A-Z]*.jsx",
  styleguideComponents: {
    Wrapper: path.resolve("src/styleguide.wrapper"),
  },
  webpackConfig: {
    resolve: {
      modules: [path.resolve(__dirname, "src"), path.resolve("node_modules")],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules\/(?!gatsby\/cache-dir).*/,
          include: [
            /src\/(.*)\/*.jsx?$/,
            /node_modules\/gatsby\/cache-dir\/(.*).js$/,
          ],
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-gatsby"],
          },
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader?modules",
        },
      ],
    },
  },
}

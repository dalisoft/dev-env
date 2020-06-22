const path = require("path")

module.exports = {
  components: "src/components/**/[A-Z]*.jsx",
  styleguideComponents: {
    Wrapper: path.resolve("src/styleguide.wrapper"),
  },
  webpackConfig: {
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/gim,
          exclude: /node_modules\/(?!gatsby\/cache-dir).*/gim,
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-gatsby"],
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
}

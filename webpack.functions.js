const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /.*/,
        include: path.resolve(__dirname, 'node_modules/echomd/js'),
        loader: 'shebang-loader'
      }
    ]
  }
};

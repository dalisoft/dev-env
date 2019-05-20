const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
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

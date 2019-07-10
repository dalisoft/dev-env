const package = require('./package');

module.exports = {
  plugins: ['scss'],
  modify: (config, { target, dev }, webpack) => {
    const immutableConfig = { ...config };

    if (target === 'node') {
      immutableConfig.externals = immutableConfig.externals.concat(
        Object.keys(package.dependencies)
      );
    } else {
      if (!immutableConfig.externals) {
        immutableConfig.externals = [];
      }
      immutableConfig.externals = immutableConfig.externals.concat([
        'nanoexpress',
        'ajv',
        'fast-json-stringify',
        'cookie'
      ]);
    }

    immutableConfig.devtool = dev ? 'cheap-module-source-map' : 'none';

    return immutableConfig;
  }
};

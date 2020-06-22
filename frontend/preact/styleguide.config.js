const path = require('path');

module.exports = {
  components: 'src/components/**/[A-Z]*.jsx',
  styleguideComponents: {
    Wrapper: path.resolve('src/styleguide.wrapper'),
  },
};

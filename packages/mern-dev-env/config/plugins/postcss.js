import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';

import { dev, watch } from '../env';

export default postcss({
  extract: 'build/assets/css/bundle.css',
  plugins: dev && watch ? [] : [autoprefixer],
  autoModules: true,
  sourceMap: watch,
  extensions: ['.scss', '.css']
});

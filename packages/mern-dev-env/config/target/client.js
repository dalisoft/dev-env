import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import { watch } from '../env';
import globals from '../globals';
import * as plugins from '../plugins/index';
import terser from '../plugins/terser';

export default {
  input: './src/client/index.js',
  output: {
    format: 'esm',
    dir: './build/assets/js',
    inlineDynamicImports: true,
    // file: './build/assets/js/bundle.js',
    // esModule: false,
    sourceMap: watch,
    globals
  },
  plugins: [
    ...Object.values(plugins),
    terser,
    resolve({
      mainFields: ['module', 'main'],
      browser: true,
      include: ['node_modules/**', 'node_modules/path-to-regexp/*'],
      exclude: ['node_modules/nanoexpress-pro'],
      preferBuiltins: false,
      sourceMap: watch
    }),
    commonjs({
      include: ['node_modules/**', 'node_modules/path-to-regexp/*'],
      exclude: ['node_modules/nanoexpress-pro/*'],
      ignoreGlobal: true,
      namedExports: {
        'node_modules/react/index.js': [
          'Component',
          'PureComponent',
          'Fragment',
          'Children',
          'createElement',
          'createContext',
          'isValidElement',
          'useLayoutEffect',
          'useEffect',
          'useMemo',
          'useRef',
          'useContext',
          'useReducer',
          'forwardRef',
          'createRef'
        ],
        'node_modules/react-is/index.js': [
          'isValidElementType',
          'isContextConsumer'
        ],
        'node_modules/react-dom/index.js': [
          'hydrate',
          'unstable_batchedUpdates'
        ]
      }
    })
  ]
};

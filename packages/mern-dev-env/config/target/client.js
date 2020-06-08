import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import globals from '../globals';
import * as plugins from '../plugins/index';
import terser from '../plugins/terser';

export default {
  input: './src/client/index.js',
  output: {
    format: 'iife',
    file: './build/assets/js/bundle.js',
    esModule: false,
    sourceMap: false,
    globals
  },
  plugins: [
    ...Object.values(plugins),
    terser,
    resolve({
      mainFields: ['module', 'main'],
      browser: true,
      include: 'node_modules/**',
      preferBuiltins: false,
      sourceMap: false
    }),
    commonjs({
      include: 'node_modules/**',
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
          'forwardRef'
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

import babel from 'rollup-plugin-babel'
import buble from 'rollup-plugin-buble'
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import browsersync from 'rollup-plugin-browsersync'
import postcss from 'rollup-plugin-postcss'
import image from 'rollup-plugin-image'
import flow from 'rollup-plugin-flow'
import copy from 'rollup-plugin-copy'
import clean from 'rollup-plugin-clean'

const packageJson = require('./package')
const external = Object.keys(packageJson.dependencies)
const NODE_ENV = process.env.ROLLUP_WATCH ? 'development' : 'production'
const production = NODE_ENV === 'production'

if (production) {
	console.log('Production mode: Building application...')
} else {
	console.log('Development mode: Watching updates...');
}

export default [
  {
    input: './src/client/index.js',
    output: {
      format: 'iife',
      file: './dist/client/app.js',
      sourcemap: !production,
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
      }
    },
    plugins: [
	  clean(),
      postcss({
        modules: true,
        exec: true,
        sourceMap: true
      }),
      buble({
        transforms: {
          dangerousForOf: true
        },
        objectAssign: 'Object.assign',
		jsx: 'createElement'
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      cjs({
        exclude: 'node_modules/process-es6/**',
        include: [
          'node_modules/create-react-class/**',
          'node_modules/fbjs/**',
          'node_modules/object-assign/**',
          'node_modules/react/**',
          'node_modules/react-dom/**',
          'node_modules/prop-types/**'
        ],
        namedExports: {
          'node_modules/react/index.js': ['Component', 'PureComponent', 'PropTypes', 'createElement'],
          'node_modules/react-dom/index.js': ['render']
        }
      }),
      globals(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      resolve({
        browser: true,
        main: true,
        preferBuiltins: false
      }),
      image(),
      flow({
        all: !production,
        pretty: production
      }),
      production && uglify({
        sourceMap: true
      }),
      !production && browsersync({server: 'dist/client'}),
	  copy({
		'src/client/index.html': 'dist/client/index.html'
	  })
    ]
  },
  {
    input: './src/server/index.js',
    output: {
      format: 'cjs',
      file: './dist/server/server.js',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
      }
    },
    external,
    plugins: [
	  clean(),
      buble({
        transforms: {
          dangerousForOf: true
        },
        objectAssign: 'Object.assign',
        jsx: 'createElement'
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      globals(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      image(),
      flow({
        all: !production,
        pretty: production
      }),
      production && uglify({
        sourceMap: true
      })
    ]
  }
]

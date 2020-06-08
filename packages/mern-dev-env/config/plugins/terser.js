import { terser } from 'rollup-plugin-terser';
import { dev, watch } from '../env';

export default (!dev && !watch) ? terser() : null;

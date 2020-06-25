import cors from 'cors';
import { origin } from '../constants.js';

export default cors({
  origin,
  credentials: true,
});

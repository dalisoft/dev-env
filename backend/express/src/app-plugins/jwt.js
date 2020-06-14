import expressJWT from 'express-jwt';
import { jwtSign } from '../config';

export default expressJWT(jwtSign).unless({ path: ['/', '/route1'] });

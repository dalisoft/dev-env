import expressJWT from 'express-jwt';
import { jwtSign } from '../config.js';

export default (app) => app.use(expressJWT(jwtSign).unless({ path: ['/'] }));

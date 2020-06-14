import expressJWT from 'express-jwt';
import { jwtSign } from '../config';

export default (app) => app.use(expressJWT(jwtSign));

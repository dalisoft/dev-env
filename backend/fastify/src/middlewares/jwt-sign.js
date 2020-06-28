import pick from 'lodash.pick';
import { jwt, jwtSign } from '../config.js';
import { keyGenerator } from '../helpers/index.js';
import crypto from 'crypto';

const secureFields = ['email', 'role', 'clientSignature'];
export default async function (req, _res, payload, next) {
  if (payload.status === 'success') {
    const clientSignature = crypto
      .createHash('sha256')
      .update(keyGenerator(req))
      .digest('hex');

    const accessToken = await this.jwt.sign(
      pick({ ...payload, clientSignature }, secureFields),
      jwtSign.secret,
      jwt
    );

    return next(null, { ...payload, accessToken });
  }
  next(null, payload);
}

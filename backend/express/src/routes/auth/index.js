import express from 'express';
import pick from 'lodash.pick';
import { Auth } from '../../controllers/index.js';
import { validator } from '../../middlewares/index.js';
import wrapRoute from '../../helpers/wrap-route.js';

import { cookies as cookiesConfig } from '../../config.js';
import validation from './validation.json';

const auth = express.Router();

auth.get(
  '/',
  validator.validate(validation.checkLogin),
  wrapRoute(async (req, res) => {
    const data = await Auth.checkLogin(req.cookies.access_token);
    data.data = pick(data.data, ['id', 'roles', 'email']);

    res.send({ status: 'success', ...data });
  })
);

auth.post(
  '/login',
  validator.validate(validation.login),
  wrapRoute(async ({ body }, res) => {
    const { credentials, user } = await Auth.login(body);

    if (!credentials.accessToken) {
      return res.send({ status: 'error' });
    }

    res.cookie('access_token', credentials.accessToken, cookiesConfig.token);

    res.send({
      status: 'success',
      data: { user: pick(user, ['id', 'roles', 'email']) },
    });
  })
);

auth.post(
  '/register',
  validator.validate(validation.register),
  wrapRoute(async ({ body }, res) => {
    res.status(201);

    const user = await Auth.register(body);
    const filteredUser = pick(user, ['id', 'roles', 'email']);

    res.send({ status: 'success', data: { user: filteredUser } });
  })
);

auth.post('/logout', validator.validate(validation.del), (req, res) => {
  res.clearCookie('access_token');

  res.send({ status: 'success' });
});

auth.post(
  '/del_account',
  wrapRoute(async (req, res) => {
    const { params } = req;

    await Auth.deleteUser(params.id);

    res.status(204);
    res.send({ status: 'success' });
  })
);

export default auth;

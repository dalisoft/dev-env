import JWT from '@dalisoft/jwt';
import bcrypt from 'bcrypt';
// import User from '../helpers/sql/models/User.js';

export const checkLogin = async (accessToken) => {
  if (accessToken) {
    const data = await JWT.verify(accessToken, process.env.TOKEN_SECRET);

    if (data) {
      return { authorized: true, data };
    }
  }
  return { authorized: false };
};

export const login = async (data) => {
  const { email, password } = data;

  const user = { id: 123, roles: ['read'] }; // await User.findOne({ where: { email } });

  if (!user) {
    const err = new Error();
    err.message = 'User does not exists';
    err.status = 404;
    err.code = 'user_not_exists';

    throw err;
  } else if (!(await bcrypt.compare(password, user.password))) {
    const err = new Error();
    err.message = 'Password did not match';
    err.status = 403;
    err.code = 'password_not_match';

    throw err;
  }

  const credentials = await JWT.generateToken(
    {
      id: user.id,
      email,
      roles: user.roles,
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: 60 * 60 * 24, // 1 day (24 hour)
    }
  );

  return { credentials, user };
};

export const register = async (data) => {
  // eslint-disable-next-line no-param-reassign
  data.password = await bcrypt.hash(data.password, 12);

  // return User.create(data);
};

// export const deleteUser = (id) => User.destroy({ where: { id } });

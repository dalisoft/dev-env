export default (err, req, res, next) => {
  if (!err) {
    return next();
  }
  if (typeof err === 'string') {
    // eslint-disable-next-line no-param-reassign
    err = { message: err };
  }

  const { code, status } = err;

  if (status) {
    res.status(status);
  }

  // Enable logging only for local
  // DEVELOPMENT so developer can see
  // what wrong
  if (process.env.NODE_ENV === 'development') {
    console.log('[LOG]: Error', {
      message: err.message,
      id: err.id,
      code: err.code,
      status: err.status,
      stack_trace: err.stack,
    });
  }

  res.header('Content-Type', 'application/json; charset=utf-8');

  if (code === 'permission_denied') {
    res.send({ status: 'error', message: 'Access denied' });
  } else if (code === 'credentials_required') {
    res.send({
      status: 'error',
      message: 'User is not logined, please login first',
    });
  } else if (code === 'invalid_token') {
    res.send({
      status: 'error',
      message: 'Token is invalid or marlformed',
    });
  } else if (code === 'password_not_match') {
    res.send({
      status: 'error',
      message: 'Incorrect password',
    });
  } else if (code === 'email_exists' || code === 'user_not_exists') {
    res.send({
      status: 'error',
      message: `User ${code === 'user_not_exists' ? 'not' : 'already'} exists`,
    });
  } else if (err.name === 'JsonSchemaValidationError') {
    res.status(status || 500);
    res.send({ errors: err.validationErrors });
  } else {
    res.status(status || 500);
    res.send({ status: 'error', message: err.message });
  }
  return res;
};

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
    res.send({ status: 'error', message: 'Доступ запрещен' });
  } else if (code === 'credentials_required') {
    res.send({ status: 'error', message: 'Пользователь не авторизован' });
  } else if (code === 'invalid_token') {
    res.send({
      status: 'error',
      message: 'Подпись токена авторизации недействительна или повреждена',
    });
  } else if (code === 'password_not_match') {
    res.send({
      status: 'error',
      message: 'Неверный пароль',
    });
  } else if (code === 'email_exists' || code === 'user_not_exists') {
    res.send({
      status: 'error',
      message: `Пользователь ${
        code === 'user_not_exists' ? 'не' : 'уже'
      } существует`,
    });
  } else if (code === 'disallowed_files') {
    res.send({
      status: 'error',
      message: 'Неподдерживаемый формат контента выгрузки',
    });
  } else if (code === 'tag_duplicated') {
    res.send({
      status: 'error',
      message: 'Этот тег уже есть в БД, попробуйте другой тег',
    });
  } else if (code === 'file_duplicated') {
    res.send({
      status: 'error',
      message: 'Этот файл уже есть в сервере, попробуйте выгрузить другой файл',
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

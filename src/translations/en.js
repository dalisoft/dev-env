import { ONLY_STRING_LETTERS } from './constants';

export default {
  'body/(.*) ': 'In Request body field $1',
  [`(.*) should have required property '${ONLY_STRING_LETTERS}'`]: (
    _,
    $0,
    $1
  ) => `Request ${$0} should have required property \`${$1}\``,
  'body should NOT have additional properties':
    'Request body should NOT have additional properties',
  'body.(.*) should be (.*)': (_, $1, $2) =>
    `Request body field type \`${$1}\` should be ${$2}`,
  'body.(.*) should NOT be (.*) than (.*) characters': (_, $1, $2, $3) =>
    `Request body field \`${$1}\` should NOT be ${$2} than ${$3} characters`,
  '(.*) is required!': 'In Response body should be field `$1`!',
  httpErrors: {
    NotFound: "This path doesn't exist at server, please check request path",
    BadRequest:
      'Your request seems to be invalid or incorrect, please check your request',
    TokenExpiredOrInvalid:
      'The token which you logged was expired and/or broken, please relogin to gain access again',
    UnauthorizedAccess:
      'This path is protected and only for Authorized users only, please login first to get access',
    UnauthorizedDeviceAccess:
      'Looks like you changed network or device, so, please login again due of security',
    AdminOnlyResource: 'This path is accessible only for admins and devs',
    AccessDeniedByCORS: 'This request is denied by CORS security',
    UserNotFound: "User doesn't found in our database",
    InvalidPassword: 'Invalid password'
  }
};

import { ONLY_STRING_LETTERS } from '../constants.js';
// import { typeNames, requestTypeNames } from './types';
// import misc from './misc';

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
  '(.*) is required!': 'In Response body should be field `$1`!'
};

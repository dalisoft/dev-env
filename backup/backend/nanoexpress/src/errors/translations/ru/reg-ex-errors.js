import { ONLY_STRING_LETTERS } from '../constants.js';
import { typeNames, requestTypeNames } from './types.js';
import misc from './misc.js';

export default {
  'body/(.*) ': 'В тело запроса поле $1',
  [`(.*) should have required property '${ONLY_STRING_LETTERS}'`]: (
    _,
    $0,
    $1
  ) =>
    `${requestTypeNames[$0]} запроса должно иметь обязательное поле \`${$1}\``,
  'body should NOT have additional properties':
    'Тело запроса НЕ должно иметь дополнительные поля',
  'body.(.*) should be (.*)': (_, $1, $2) =>
    `В тело запроса поле \`${$1}\` должно быть ${typeNames[$2]}`,
  'body.(.*) should NOT be (.*) than (.*) characters': (_, $1, $2, $3) =>
    `В тело запроса поле \`${$1}\` НЕ должно быть ${misc[$2]} чем ${$3} символов`,
  '(.*) is required!': 'В ответ должно быть поле `$1`!',
  'Rate limit exceeded, retry in (.*) seconds':
    'Превышено ограничение на частоту, повторите попытку через $1 секунд'
};

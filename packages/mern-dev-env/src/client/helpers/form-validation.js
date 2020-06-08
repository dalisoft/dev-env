const required = (value) =>
  value || typeof value === 'number' ? undefined : 'FORM_VALIDATION.REQUIRED';

const minLength = (min) => (value) =>
  value && value.length < min ? 'FORM_VALIDATION.MIN_LENGTH' : undefined;

const minLength8 = minLength(8);

const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'FORM_VALIDATION.EMAIL'
    : undefined;

const acceptTerms = (value) =>
  value ? undefined : 'FORM_VALIDATION.ACCEPT_TERMS';

export default {
  required,
  minLength,
  minLength8,
  email,
  acceptTerms
};

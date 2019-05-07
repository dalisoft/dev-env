const validate = values => {
	const errors = {};

	if (values.password !== values.password_repeat) {
		errors.password_repeat = 'passwordIsNotIdentical';
	}

	return errors;
};

export default validate;

const flatten = (nestedMessages, prefix = '') => Object.keys(nestedMessages).reduce((messages, key) => {
	let value = nestedMessages[key];
	let prefixedKey = prefix ? `${prefix}.${key}` : key;

	if (typeof value === 'string') {
		messages[prefixedKey] = value;
	}
	else {
		Object.assign(messages, flatten(value, prefixedKey));
	}

	return messages;
}, {});

export default flatten;

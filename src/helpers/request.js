import request from 'superagent';
import promiseRetry from 'promise-retry';
import { each } from 'lodash';
import { getState } from 'helpers';
// import { auth } from 'redux/actions'; TODO:

const isDev = process.env.NODE_ENV === 'development';
const waitTime = isDev ? 3 : 1;
const retryOptions = {
	retries: 3,
	factor: 2,
	minTimeout: 500,
	maxTimeout: 2000 * waitTime,
};

const doRequest = (url, options) => {
	if (!options.method) {
		options.method = 'get';
	}

	const req = request[options.method.toLowerCase()](url);

	req.timeout({
		response: 6000 * waitTime, // Wait 6 seconds for the server to start sending,
		deadline: 26000 * waitTime, // but allow 2 minutes for the file to finish loading.
	});

	if (!options.noToken) {
		const token = getState().auth.token;
		req.set({
			Authorization: token,
			Accept: 'application/json',
		});
	}

	if (options && !options.noCredentials) {
		req.withCredentials();
	}

	if (options.headers) {
		req.set(options.headers);
	}

	if (options.query) {
		req.query(options.query);
	}

	if (options.body) {
		req.send(options.body);
	}

	if (options.file) {
		req.attach('file', options.file);
	}

	if (options.files) {
		each(options.files, file => {
			req.attach('file', file);
		});
	}

	// Please see Chrome DevTool Network tab for request info
	// console.log(req)

	return req;
};

const requestByMethod = method => (url, options) => {
	options = options || {};

	if (typeof options.before === 'function') {
		options.before();
	}

	if (typeof options.setLoading === 'function') {
		options.setLoading(true);
	}

	return new Promise((resolve, reject) =>
		promiseRetry(
			(retry, number) =>
				doRequest(url, { ...options, method })
					.then(data => {
						// Please see Chrome DevTool Network tab to see more info about every request
						// console.log('request', url, data, err)

						if (typeof options.always === 'function') {
							options.always();
						}

						if (typeof options.setLoading === 'function') {
							options.setLoading(false);
						}

						if (data && data.statusCode === 204) {
							return resolve(data.statusCode);
						}

						if (data && data.ok && !data.body) {
							return resolve(data.text);
						}

						return resolve(data && data.body);
					})
					.catch(err => {
						if (err && err.status === 403 && err.response && err.response.body) {
							if (
								err.response.body.detail &&
								err.response.body.detail.includes('user-session and user with provided token not found')
							) {
								// auth.logout(); TODO:
							}
							return reject(err.response.body);
						}
						if (err && (err.status === 400 || err.status === 409) && err.response && err.response.body) {
							return reject(err.response.body);
						}
						if (err && err.status === 511) {
							return reject(err && err.response && err.response.body);
						}
						if (err && err.status === 404) {
							// TODO properly catch 404 and 500 errors
							return reject(err && err.response && err.response.body);
						}
						console.log(`Retry #${number}`);
						retry(err);
						reject(err && err.response && err.response.body);
					}),
			retryOptions
		)
	);
};

doRequest.get = requestByMethod('get');
doRequest.post = requestByMethod('post');
doRequest.patch = requestByMethod('patch');
doRequest.put = requestByMethod('put');
doRequest.delete = requestByMethod('delete');
doRequest.upload = requestByMethod('post');
doRequest.redirectDetector = function(method, url) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);

		xhr.onload = function() {
			if (this.status >= 200 && this.status < 300) {
				resolve({ data: xhr.response, redirectTo: null });
			} else if (this.status === 302) {
				resolve({ data: null, redirectTo: this.getResponseHeader('Location') });
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText,
				});
			}
		};
		xhr.send();
	});
};

export default doRequest;

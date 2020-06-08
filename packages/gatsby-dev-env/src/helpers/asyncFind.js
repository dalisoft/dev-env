const tickMap = {};
// eslint-disable-next-line
Promise.prototype.debounce = function(ms) {
	return this.then(
		data =>
			new Promise(resolve => {
				const _id = JSON.stringify(data);
				clearTimeout(tickMap[_id]);
				tickMap[_id] = setTimeout(resolve, ms, data);
			})
	);
};
// eslint-disable-next-line
Promise.prototype.wait = function(ms) {
	return this.then(data => new Promise(resolve => setTimeout(resolve, ms, data)));
};

export default (obj, fn, ms = 500) => {
	let timerId;
	return new Promise(function _promise_(resolve) {
		const _fnc_ = fn(obj);
		if (_fnc_ !== undefined) {
			clearTimeout(timerId);
			resolve(_fnc_);
		} else {
			timerId = setTimeout(_promise_, ms, resolve);
		}
	});
};

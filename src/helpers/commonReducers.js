export const setFetching = (state, isFetching) => ({
	...state,
	isFetching,
});

export const update = (state, payload) => ({
	...state,
	...payload,
});

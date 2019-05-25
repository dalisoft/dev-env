export default (store) => ({
	increment: (state) => ({
		...state,
		counter: state.counter + 1
	}),
	decrement: (state) => ({
		...state,
		counter: state.counter - 1
	}),
	reset: (state) => ({
		...state,
		counter: 0
	}),
	setLocale: (state, locale) => ({
		...state,
		locale
	})
});

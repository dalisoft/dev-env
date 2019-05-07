const initialState = {
  locale: 'en',
};

const setLocale = (state, locale) => ({ ...state, locale });

export default { initialState, setLocale };

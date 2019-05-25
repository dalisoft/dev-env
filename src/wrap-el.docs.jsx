import React from 'preact-compat';
import 'intl';
import { Provider } from 'unistore/preact';
import { store } from './store';

const Wrap = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Wrap;

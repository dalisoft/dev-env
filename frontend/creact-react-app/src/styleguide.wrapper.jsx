import 'intl';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Wrap = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Wrap;

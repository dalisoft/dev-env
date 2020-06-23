import 'intl';
import { h } from 'preact';
import { Provider } from 'unistore/preact';
import { store } from './store';

// Fixes Preact.h is undefined
global.h = h;

const Wrap = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Wrap;

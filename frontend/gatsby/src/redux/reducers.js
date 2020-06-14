import { wrapReducers } from 'redaction';

import reducers from './_reducers';
import { dispatch } from '../helpers';

const wrappedReducers = wrapReducers(reducers, dispatch);

export default wrappedReducers;

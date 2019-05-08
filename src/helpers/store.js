import { store } from '../redux/store';

export const getState = () => store.getState();

export const dispatch = (...params) => store.dispatch(...params);

window.getState = getState;

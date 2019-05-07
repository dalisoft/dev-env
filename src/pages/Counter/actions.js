import reducers from '../../redux/reducers';

export const increment = () => reducers.counter.increment();
export const decrement = () => reducers.counter.decrement();
export const reset = () => reducers.counter.reset();

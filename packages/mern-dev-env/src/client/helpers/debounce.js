export default (fn, ms = 500, ...middlewares) => {
  let timerId;
  return (...args) => {
    if (middlewares.length > 0) {
      middlewares.forEach((middleware) => middleware(...args));
    }
    clearTimeout(timerId);
    timerId = setTimeout(fn, ms, ...args);
  };
};

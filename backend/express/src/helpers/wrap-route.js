export default (fn) => (req, res, next) => {
  const called = fn(req, res, next);

  if (typeof called.catch === 'function') {
    called.catch(next);
  }
};

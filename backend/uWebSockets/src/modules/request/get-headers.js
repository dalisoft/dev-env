export default (req, list) => {
  return list.map((name) => req.getHeader(name));
};

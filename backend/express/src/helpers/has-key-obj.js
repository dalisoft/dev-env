export default (obj) => {
  if (!obj) {
    return false;
  }
  for (const key in obj) {
    return true;
  }
};

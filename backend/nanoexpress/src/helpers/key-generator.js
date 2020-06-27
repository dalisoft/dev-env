export default (req) =>
  req.headers['x-real-ip'] || // nginx
  req.headers['cf-connecting-ip'] || // cloudflare at top
  req.headers['x-client-ip'] || // apache
  req.headers['x-forwarded-for']; // if we trust to this, cloudflare;

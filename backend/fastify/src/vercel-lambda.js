import init from './instance';

const app = init();

module.exports = async function (req, res) {
  await app.ready();
  app.server.emit('request', req, res);
};

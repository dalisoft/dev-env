import http from 'http';
import app from './instance';

let handleRequest = null;
const serverFactory = (handler) => {
  handleRequest = handler;
  return http.createServer();
};

const handler = app(serverFactory);

export default (req, res) => {
  handler.ready((err) => {
    if (err) throw err;
    handleRequest(req, res);
  });
};

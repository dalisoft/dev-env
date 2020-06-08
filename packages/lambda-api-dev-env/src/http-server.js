import http from 'http';
import httpHandler from './now-lambda';

const server = http.createServer(httpHandler);

const port = process.env.PORT || 3000;
server.listen(port);

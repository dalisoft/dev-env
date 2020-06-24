import http from 'http';
import httpHandler from './now-lambda.js';

const server = http.createServer(httpHandler);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Server listening at port ' + port);
});

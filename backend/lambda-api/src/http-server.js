import { createServer } from 'http';
import httpHandler from './vercel-lambda.js';

const server = createServer(httpHandler);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Server listening at port ' + port);
});

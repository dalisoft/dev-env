import { parse } from 'querystring';
import app from './server';

// Declare your Lambda handler
export default async (request, response) => {
  const { url, method, headers, body } = request;
  const queryParams = parse(url.substr(url.indexOf('/') + 2));

  const event = {
    httpMethod: method.toUpperCase(),
    path: url,
    resource: '/{proxy+}',
    queryStringParameters: queryParams, // TODO: do it later
    headers,
    requestContext: {},
    pathParameters: {},
    stageVariables: {},
    isBase64Encoded: false,
    body
  };
  // Run the request
  const res = await app.run(event, {}).catch((error) => ({ error }));

  if (res && !res.error) {
    let { body } = res;
    const { headers, statusCode } = res;
    if (res.isBase64Encoded) {
      body = Buffer.from(body, 'base64');
    }
    if (!headers['content-length'] && body) {
      headers['content-length'] = body.length;
    }
    response.writeHead(statusCode, headers);
    response.end(body);
  } else {
    console.error('Error was occured', res.error);
    response.writeHead(500, { 'content-length': 0 });
    response.end('');
  }
};

const time = Date.now(); // For better managing start-time / lags
import console from 'consolemd';

import uWS from 'uWebSockets.js';
// import { graphql } from 'graphql';
// import querystring from 'query-string';
// import { port, graphiql, origin } from './env';
import { port } from './env';

// import schema from './schema';

// import renderGraphiQL from './render-graphiql';
// import { jsonRes } from './helpers';

const app = uWS.App({});

app.get('/', (res) => {
  res.writeHeader('content-type', 'application/json');
  res.end(JSON.stringify({ status: 'ok' }));
});
app.post('/graphql', (res) => {
  res.writeHeader('content-type', 'application/json');
  res.end({ status: 'ok' });
});

/* const server = turbo.createServer(async (req, res) => {
  const { method, url } = req;
  const headers = req.getAllHeaders();

  if (headers.has('content-type')) {
    res.setHeader('Content-Type', headers.get('content-type'));
  }
  if (url === '/') {
    jsonRes(
      {
        status: 'ok'
      },
      res
    );
  } else if (url === '/graphql') {
    if (origin && headers.has('origin')) {
      const headerOrigin = headers.get('origin');

      if (origin !== headerOrigin) {
        res.statusCode = 403;
        return jsonRes(
          {
            status: 'error',
            message: 'Declined by CORS'
          },
          res
        );
      }
    }
    if (method === 'GET') {
      jsonRes(
        {
          status: 'error',
          message: 'Only POST method allowed for this route'
        },
        res
      );
    } else if (method === 'POST') {
      let body = '';
      req.ondata = (buffer, start, length) => {
        body += buffer.slice(start, length + start).toString();
      };

      req.onend = async () => {
        let graphqlQuery = '';
        let variables = {};
        let operationName;

        if (body.startsWith('{')) {
          body = JSON.parse(body);

          for (const key in body) {
            const value = body[key];
            if (!value) {
              continue;
            } else if (key === 'query' || key === 'mutation') {
              if (value.includes(key)) {
                graphqlQuery += value;
              } else {
                graphqlQuery += key + ' ' + value;
              }
            } else if (key === 'variables') {
              variables = value;
            } else if (key === 'operationName') {
              operationName = value;
            }
          }
        } else {
          graphqlQuery = body;
        }

        const context = { req, res };
        const response = await graphql(
          schema,
          graphqlQuery,
          undefined,
          context,
          variables,
          operationName
        );

        const responseJSONEncoded = JSON.stringify(response);

        res.setHeader('Content-Length', responseJSONEncoded.length);
        res.write(Buffer.from(responseJSONEncoded));
        res.end();
      };
    } else {
      jsonRes(
        {
          status: 'ok'
        },
        res
      );
    }
  } else if (url.startsWith('/graphiql')) {
    if (graphiql) {
      const urlParsed = querystring.parse(url.substr(9));

      if (urlParsed.query) {
        const initialResponse = await graphql(
          schema,
          urlParsed.query,
          undefined,
          undefined,
          urlParsed.variables,
          urlParsed.operationName
        );
        urlParsed.result = initialResponse;
      }

      const payload = renderGraphiQL(urlParsed);
      const data = Buffer.from(payload);
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Content-Length', data.length);
      res.write(data);
      res.end();
    } else {
      jsonRes(
        {
          status: 'error',
          message: 'GraphiQL is not enabled on server'
        },
        res
      );
    }
  }
}); */

app.listen(port, (token) => {
  if (token) {
    console.log(
      `#green([*Server*]: started successfully at *localhost:${port}* in *${Date.now() -
        time}ms*)`
    );
  } else {
    console.log(`#red([*Server*]: failed to host at *localhost:${port}*)`);
  }
});

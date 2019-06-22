const time = Date.now(); // For better managing start-time / lags
import console from 'consolemd';

import uWS from 'uWebSockets.js';
import { graphql } from 'graphql';
import querystring from 'query-string';
import { port, graphiql, origin } from './env';

import schema from './schema';

import renderGraphiQL from './render-graphiql';
import { readBody } from './helpers';

const app = uWS.App({});

app.get('/', async (res) => {
  res.experimental_cork(() => {
    res.writeHeader('Content-Type', 'application/json');
    res.end('{"status":"ok"}');
  });
});
app.get('/graphql', (res) => {
  res.experimental_cork(() => {
    res.writeHeader('content-type', 'application/json');
    res.end(
      JSON.stringify({
        status: 'error',
        message: 'Only POST method allowed for this route'
      })
    );
  });
});
app.post('/graphql', (res, req) => {
  let graphqlQuery = '';
  let variables = {};
  let operationName;

  const originHeader = req.getHeader('origin');

  res.experimental_cork(async () => {
    res.writeHeader('content-type', 'application/json');
    res.writeHeader(
      'Access-Control-Allow-Headers',
      'origin, content-type, accept'
    );
    res.writeHeader('Access-Control-Allow-Methods', 'POST');

    if (origin) {
      res.writeHeader('Access-Control-Allow-Origin', origin);

      if (origin !== originHeader) {
        return res.end(
          JSON.stringify({
            status: 'error',
            message: 'Declined by CORS'
          })
        );
      }
    }

    let body = await readBody(res);

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

    const context = { res, req: { body } };
    const response = await graphql(
      schema,
      graphqlQuery,
      undefined,
      context,
      variables,
      operationName
    );

    const responseJSONEncoded = JSON.stringify(response);

    res.end(responseJSONEncoded);
  });
});
app.get('/graphiql', async (res, req) => {
  if (graphiql) {
    const urlParsed = querystring.parse(req.getQuery());

    if (urlParsed.query) {
      const initialResponse = await graphql(
        schema,
        urlParsed.query,
        undefined,
        undefined,
        urlParsed.variables,
        urlParsed.operationName
      );
      // eslint-disable-next-line require-atomic-updates
      urlParsed.result = initialResponse;
    }
    res.experimental_cork(() => {
      const payload = renderGraphiQL(urlParsed);
      res.end(payload);
    });
  } else {
    res.experimental_cork(() => {
      res.end(
        JSON.stringify({
          status: 'error',
          message: 'GraphiQL is not enabled on server'
        })
      );
    });
  }
});

app.listen('0.0.0.0', port, (token) => {
  if (token) {
    console.log(
      `#green([*Server*]: started successfully at *localhost:${port}* in *${Date.now() -
        time}ms*)`
    );
  } else {
    console.log(`#red([*Server*]: failed to host at *localhost:${port}*)`);
  }
});

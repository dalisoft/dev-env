import 'core-js'; // polyfills for ios 9
import intl from 'intl';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import App from '../client/containers/App';
import { store } from '../client/redux/store';

import nanoexpress from 'nanoexpress';
import routes from './routes';

import { join } from 'path';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = nanoexpress();

global.Intl = intl; // polyfill for ios 9

server
  .register(routes)
  .static(process.env.RAZZLE_PUBLIC_DIR)
  .get(
    '/*',
    {
      schema: {
        headers: false
      }
    },
    (req, res) => {
      const APP_TITLE = process.env.APP_TITLE || 'Razzle Dev Env';
      const context = {};

      const markup = renderToString(
        <Provider store={store}>
          <App router={StaticRouter} location={req.url} context={context} />
        </Provider>
      );

      if (context.url) {
        return res.redirect(301, context.url);
      }

      res.end(
        // prettier-ignore
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>${APP_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
    </head>
    <body>
        <div id="root">${markup}</div>
        <script src="${assets.client.js}" defer crossorigin></script>
    </body>
</html>`
      );
    }
  );

export default server;

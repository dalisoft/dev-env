import './env';
import 'intl';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router/esm/react-router.js';

import App from '../client/containers/App';
import { store } from '../client/redux/store';

import nanoexpress from 'nanoexpress-pro/src/nanoexpress';
import staticServe from '@nanoexpress/middlewares/static/static.es.js';
import routes from './routes';

import path from 'path';

const app = nanoexpress();

async function main(port) {
  // Initialize middlewares
  app.use(await staticServe(path.join(__dirname, './assets/')));

  // Initialize routes
  app.define(routes);

  // Initialize Server-side Rendering route
  app.get('/*', (req, res) => {
    const APP_TITLE = process.env.APP_TITLE || 'MERN Dev Env';
    const context = { req, res };

    const markup = ReactDOM.renderToString(
      React.createElement(
        Provider,
        { store },
        React.createElement(App, {
          router: StaticRouter,
          location: req.path,
          context
        })
      )
    );

    if (context.url) {
      res.writeHeader('Location', context.url);
      res.writeStatus('301 Moved Permanently');
      res.end();
    } else {
      res.end(
        // prettier-ignore
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>${APP_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/bundle.css">
    </head>
    <body>
        <div id="root">${markup}</div>
        <script src="js/bundle.js" defer crossorigin></script>
    </body>
</html>`
      );
    }
  });

  await app.listen(port);

  return app;
}

main(process.env.PORT || 3000);

export default app;

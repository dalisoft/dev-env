import nanoexpress from 'nanoexpress-pro';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import bodyParser from '@nanoexpress/middlewares/body-parser/body-parser.es.js';

import { port, graphiql, origin } from './env.js';

import schema from './schema/index.js';

const app = nanoexpress();

if (origin) {
  app.use(
    cors({
      origin,
      optionsSuccessStatus: 200
    })
  );
}
app.use(bodyParser());

app.post(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: false
  })
);

app.get(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql
  })
);

app.get('/', (req, res) => {
  res.redirect('/graphql');
});

app.listen(port);

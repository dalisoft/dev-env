import nanoexpress from 'nanoexpress';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

import { port, graphiql, origin } from './env';

import schema from './schema';

const app = nanoexpress();

if (origin) {
  app.options(
    '/*',
    cors({
      origin,
      optionsSuccessStatus: 200
    })
  );
}

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

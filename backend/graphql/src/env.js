import dotenv from 'dotenv-safe';

if (process.env.NODE_ENV === 'development') {
  // TODO: Set it to `false` later on prod
  dotenv.config({ allowEmptyValues: true });
}

const { PORT: port = 3500, GRAPHIQL: graphiql, ORIGIN: origin } = process.env;

export { port, graphiql, origin };

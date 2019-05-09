import dotenv from 'dotenv-safe';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

const { PORT: port = 3500, GRAPHIQL: graphiql } = process.env;

export { port, graphiql };

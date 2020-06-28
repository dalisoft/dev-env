# fastify-dev-env

An modern development environment for Backend development with Fastify

## Note

### Websocket and Lambda/Serverless

- WebSocket feature missing on **Netlify** and **Vercel**
- Serverless AWS in local WebSocket did not work because of endpoint is mismatching, PR is Welcome

## Features

- GraphQL Apollo Server was implemented (with Subscription feature)
- now.sh serverless works out-of-the-box (tested)
- Netlify Functions works out-of-the-box (tested)
- On Serverless servers (like AWS) should work (tested locally with Serverless)
- Speeds-up your development time
- Fast backend (very good performance)
- Async/Await support (with Fastify & Babel)
- Validation / Serialization support (with Fastify)
- Fast build with Rollup & Babel
- Latest JS things can be used
- Configured all security & essential plugins
- JWT Configured
- Testing with Ava
- Documentation with Swagger
- Declarative route defining
- Always latest dependecies with Greenkeeper
- Clean code by Prettier + ESLint (at editor level too)
- Travis CI configured
- Husky & Lint-staged is configured
- i18n & Custom error messages are implemented

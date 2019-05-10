# graphql-dev-env

[![Greenkeeper badge](https://badges.greenkeeper.io/dalisoft/graphql-dev-env.svg)](https://greenkeeper.io/)

An fast & modern GraphQL development environment for with GraphiQL

## Note

This dev-env is very new/young project, not complex (as i'm focused on simplicity & performance) and may contain bugs. PR are welcome. Hope you help me improve this DEV env

## Requires

- Node.js v10 (limits refers to uWebSockets.js)
- Node.js server / Machine supports Node.js
- An good developer (like you) that already know about Node.js and ES6 Syntax

## Features

- Blazing fast performance (up to 150x faster than express-graphql)
- Low-level HTTP with uWebSockets.js
- Pure call, no layer (like express-graphql)
- Speeds up development time
- GraphiQL supported
- GraphQL variables supported
- Async/Await supported
- Fast bundle with Rollup & Babel
- Testing with Ava
- Always latest dependecies with Greenkeeper
- Clean code by Prettier + ESLint (at editor level too)
- Travis CI configured
- Husky & Lint-staged is configured

## Endpoints

- `/graphql` - Your main GraphQL path
- `/graphiql` - GraphiQL path

## Query

```js
fetch('http://your-endpoint.tld/graphql', {
  method: 'POST',
  body: 'query { hello }'
});
// or
fetch('http://your-endpoint.tld/graphql', {
  method: 'POST',
  body: JSON.stringify({ query: 'query { hello }' })
});
// or
fetch('http://your-endpoint.tld/graphql', {
  method: 'POST',
  body: JSON.stringify({
    mutation: 'mutation ($foo: String) { hello(foo: $foo) { response } }',
    variables: { foo: 'bar' }
  })
});
```

## Env Variables

- `GRAPHIQL?: string = undefined` - Define whether enable GraphiQL or not. If you don't enable GraphiQL, please don't define this env variable
- `ORIGIN?: string = undefined` - CORS-like origin checked, will declide request to `/graphql` if origin does not match

## License

This project are licensed under MIT, but `renderGraphiQL` [license](https://github.com/graphql/express-graphql/blob/master/LICENSE) may differ from MIT license

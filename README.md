# React-Static Dev Env

[![Greenkeeper badge](https://badges.greenkeeper.io/dalisoft/react-static-dev-env.svg)](https://greenkeeper.io/)

This project is modified and prepared as Development Environment for Frontend development with Netlify support. This project may support SSR, but we do not recommend using SSR, would be best using Netlify Prerendering which works fast and elegant for now (hope in future too works great like now)

## Target of project

- React PropTypes instead of TypeScript
- Latest dependecies (stable)
- i18n support configured
- Prettier configured
- Stylelint configured
- VS Code configuration configured (for best performance)
- Using React PropTypes
- Redaction instead of Redux dispatching (easy & fun)
- Client-side only (no SSR)
- Netlify support
- Github Pages support (via `npm run deploy`)
- Fetch is preferred
- NPM is preferred (because of dependecies resolve)
- Components are documented with docz (with basic example)
- Components are tests with react-test-renderer and Jest (with basic example)
- Good browser support
- Good structured (subjective)

## Don't use this ENV on production yet (it has bugs!!!)

1. [`require` is not defined](https://github.com/nozzle/react-static/issues/1164)

2. On Build, `index.html` file is not generating

To use this template, run `react-static create` and use the `basic` template.

**Note**: _Installed `react-scripts` as temporarily workaround to pass tests, other way i tried, but didn't worked, i hope and wait tests integration with Jest from `react-static` community_

For more information/docs, please check `react-static` repository

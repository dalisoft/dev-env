# razzle-dev-env

[![Greenkeeper badge](https://badges.greenkeeper.io/dalisoft/razzle-dev-env.svg)](https://greenkeeper.io/)

This project is modified and prepared as Development Environment for Frontend development with SSR support. This project supports SSR. Also if you have less money on deploy servers, this Dev-Env will help you because it uses only one server for both Express (server) and React (client)

## Target of project

- React PropTypes instead of TypeScript
- Latest dependecies (stable)
- i18n support configured
- Prettier configured
- Stylelint configured
- VS Code configuration configured (for best performance)
- Using React PropTypes
- Redaction instead of Redux dispatching (easy & fun)
- SSR Compatible
- Fetch is preferred
- NPM is preferred (because of dependecies resolve)
- Components are documented with docz (with basic example)
- Components are tests with react-test-renderer and Jest (with basic example)
- Good browser support
- Good structured (subjective)

### Testing

For one of component was created test using `Jest` + `react-test-renderer` and works good for now.

Note: _If you install Jest to your Editor, works without any commands at editor level with good performance_

Command to run

```bash
npm test
```

### Linting (in progress)

ESLint + Prettier + Stylelint is very good combo to keep project as high quality, clean and maintainable.

Note: _If you install Plug-ins of these linters to your Editor, works without any commands at editor level with good performance_

Command to run

```bash
npm lint
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Learn More

You can learn more in the [Razzle documentation]https://github.com/jaredpalmer/razzle).

To learn React, check out the [React documentation](https://reactjs.org/).

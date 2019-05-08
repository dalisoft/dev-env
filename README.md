# CRA-Modified

[![Greenkeeper badge](https://badges.greenkeeper.io/dalisoft/cra-modified-dev-env.svg)](https://greenkeeper.io/)

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
- Fetch is preferred
- NPM is preferred (because of speed & module caching)
- Components are documented with docz (with basic example)
- Components are tests with react-test-renderer and Jest (with basic example)
- Good browser support
- Good structured (subjective)

## Features Map

### Documentations

One of component was documented with docz and works good for now.
Showing docs available only for DEV as frontend-devs works in localhost most-time

Command to run

```bash
npm run docs
```

### Testing

For one of component was created test using `Jest` + `react-test-renderer` and works good for now.

Note: _If you install Jest to your Editor, works without any commands at editor level with good performance_

Command to run

```bash
npm test
```

### Linting

ESLint + Prettier + Stylelint is very good combo to keep project as high quality, clean and maintainable.

Note: _If you install Plug-ins of these linters to your Editor, works without any commands at editor level with good performance_

Command to run

```bash
npm lint
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

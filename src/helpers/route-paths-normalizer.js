import console from 'consolemd';

// Constants
const fastifyMethods = [
  'get',
  'post',
  'put',
  'patch',
  'delete',
  'head',
  'options'
];

// Utils
const pathKeyNormalizer = (path) =>
  path.includes('{') ? path.replace(/\{(.*)\}/g, ':$1') : path;
const transformMiddlewares = (fastify, middlewares, hooks) =>
  Array.isArray(hooks)
    ? hooks.map((key) =>
        typeof key === 'function'
          ? key
          : Array.isArray(key)
          ? middlewares[key[0]](fastify, ...key[1])
          : middlewares[key].bind(fastify)
      )
    : typeof hooks === 'function'
    ? hooks
    : middlewares[hooks];
const mapTransforms = (fastify, middlewares, middlewareMap) => {
  for (const key in middlewareMap) {
    middlewareMap[key] = transformMiddlewares(
      fastify,
      middlewares,
      middlewareMap[key]
    );
  }
  return middlewareMap;
};

export default (middlewares, frozenRoutes, specialRoutes = ['ws']) => async (
  fastify
) => {
  const routes = { ...frozenRoutes };

  (function normalizeRoutes(path, appRoutes, route = false) {
    if (route && path) {
      routes[path] = appRoutes;
      return;
    }
    for (const key in appRoutes) {
      const value = appRoutes[key];
      const keysOfValue = value && Object.keys(value);
      const normalisedKey = pathKeyNormalizer(key);

      if (!path || path === '/' || key.startsWith('/')) {
        normalizeRoutes(path + normalisedKey, value);
        delete appRoutes[key];
      } else if (
        keysOfValue &&
        keysOfValue.every((key) => fastifyMethods.includes(key.toLowerCase()))
      ) {
        const route = routes[path];
        const normalisedValue =
          typeof value === 'function' ? { callback: value } : value;

        if (route) {
          route[key] = normalisedValue;
        } else {
          routes[path] = {
            [key]: normalisedValue
          };
        }
      } else {
        console.error(
          `#red([*Server*]: The Schema of _*${path}*_ ` +
            'is *missing*, please add schema!)'
        );
      }
    }
  })('/', routes, false);

  for (const path in routes) {
    const route = routes[path];
    const methods = Object.keys(route);

    if (route) {
      methods.forEach((method) => {
        const { callback, schema, ...allHooks } = route[method];

        if (specialRoutes.includes(method)) {
          fastify[method](path, callback);
        } else {
          fastify.route({
            method: method.toUpperCase(),
            url: path,
            ...mapTransforms(fastify, middlewares, allHooks),
            schema,
            handler: callback
          });
        }
      });
    }
  }
};

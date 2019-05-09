const { HTTPS, PORT, NODE_ENV, BACKEND_URL, TEST_BACKEND_URL } = process.env;
const secure = HTTPS ? JSON.parse(HTTPS) : false;
const dev = NODE_ENV === 'development';

export default {
  // addModels: true,
  swagger: {
    info: {
      title: 'Fastify Dev Env',
      description: 'Fastify Dev Env documentation',
      version: '0.1.0'
    },
    servers: [
      {
        url: `${secure ? 'https' : 'http'}://0.0.0.0:` + PORT,
        description: 'Local development'
      },
      {
        url: TEST_BACKEND_URL,
        description: 'Production on test-server'
      },
      {
        url: BACKEND_URL,
        description: 'Production on real-server'
      }
    ].filter((f) => f.url),
    host: dev ? '0.0.0.0:' + PORT : BACKEND_URL,
    schemes: ['http', secure && 'https'].filter((f) => f),
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      {
        name: 'route-1',
        description: 'Route category 1'
      },
      {
        name: 'route-2',
        description: 'Route category 2'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          description: 'Authorization Token',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  exposeRoute: true
};

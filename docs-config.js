const { HTTPS, PORT, NODE_ENV, BACKEND_URL } = process.env;
const secure = HTTPS ? JSON.parse(HTTPS) : false;
const dev = NODE_ENV === 'development';

module.exports = {
  // addModels: true,
  swagger: {
    info: {
      title: 'Fastify CRUD',
      description: 'Fastify CRUD Dev Env',
      version: '0.1.0'
    },
    servers: [
      {
        url: `${secure ? 'https' : 'http'}://0.0.0.0:` + PORT,
        description: 'Локальный путь разработки API'
      },
      {
        url: BACKEND_URL,
        description: 'Боевой продакшн путь API'
      }
    ].filter((f) => f.url),
    host: dev ? '0.0.0.0:' + PORT : BACKEND_URL,
    schemes: ['http', secure && 'https'].filter((f) => f),
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      {
        name: 'admin',
        description:
          'Администраторы и безопасный путь только для' +
          ' разработчиков, который позволяет изменять данные БД'
      },
      {
        name: 'auth',
        description: 'Аутентификация пользователя'
      },
      {
        name: 'message',
        description: 'Обмен сообщениями'
      },
      {
        name: 'category',
        description: 'Категории приза'
      },
      {
        name: 'adversite',
        description: 'Приз объявления'
      },
      {
        name: 'profile',
        description: 'Профиль пользователя'
      },
      {
        name: 'bookmark',
        description: 'Закладка пользователя'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          description: 'Токен авторизации',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  exposeRoute: true
};

import { Controller1 } from '../controllers';

export default {
  get: async () => 'hello',
  '/hello': {
    get: async (req) => new Controller1(req).Hello()
  },
  '/get': {
    '/:id': {
      get: async (req) => ({
        message: 'get called on /get/' + req.params.id
      })
    }
  },
  '/post': {
    '/profile': {
      get: async () => ({ message: 'get called on /post/profile' }),
      '/:id': {
        post: async (req) => ({
          message: 'post on /post/profile/' + req.params.id
        }),
        '/verify': {
          '/{token}': {
            put: async (req) => ({
              message:
                'put on /post/profile/' +
                req.params.id +
                '/verify/' +
                req.params.token
            })
          },
          post: async (req) => ({
            message: 'post on /post/profile/' + req.params.id + '/verify'
          })
        }
      }
    }
  }
};

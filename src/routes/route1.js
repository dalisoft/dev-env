import { Controller1 } from '../controllers';

export default {
  get: async () => 'hello',
  '/hello': {
    get: async (req) => new Controller1(req).Hello()
  },
  '/get': {
    '/:id': {
      get: async (req) => 'get called on /get/' + req.params.id
    }
  },
  '/post': {
    '/profile': {
      get: async () => 'get called on /post/profile',
      '/:id': {
        post: async (req) => 'post on /post/profile/' + req.params.id,
        '/verify': {
          '/{id}': {
            put: async (req) =>
              'put on /post/profile/:id/verify/' + req.params.id
          },
          post: async (req) =>
            'post on /post/profile/' + req.params.id + '/verify'
        }
      }
    }
  }
};

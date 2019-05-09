export default {
  get: async () => 'hello',
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

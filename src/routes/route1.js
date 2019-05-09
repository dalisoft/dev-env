export default {
  '/get': {
    '/:id': {
      get: () => console.log('get called on /get/:id')
    }
  },
  '/post': {
    '/profile': {
      get: () => console.log('get called on /post/profile'),
      '/:id': {
        patch: () => console.log('post on /post/profile/:id'),
        '/verify': {
          '/{id}': {
            put: () => console.log('put on /post/profile/:id/verify/{id}')
          },
          delete: () => console.log('post on /post/profile/:id/verify')
        }
      }
    }
  }
};

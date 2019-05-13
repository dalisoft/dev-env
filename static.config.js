import path from 'path';

export default {
  webpack: (config) => Object.assign(config, { target: 'web' }),
  /* getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },*/
  plugins: [
    [
      'react-static-plugin-source-filesystem',
      {
        location: path.resolve('./src/pages'),
      },
    ],
    'react-static-plugin-sass',
    'react-static-plugin-css-modules',
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap',
  ],
};

import React from 'react';
import path from 'path';

export default {
  target: 'web',
  publicPath: '/',
  webpack: (config) => {
    /* if (config.resolve.alias.set) {
      config.resolve.alias.set('redux', path.join(__dirname, 'src', 'redux'));
      config.resolve.alias.set('components', path.join(__dirname, 'src', 'components'));
      config.resolve.alias.set('pages', path.join(__dirname, 'src', 'pages'));
      config.resolve.alias.set('modules', path.join(__dirname, 'src', 'modules'));
      config.resolve.alias.set('helpers', path.join(__dirname, 'src', 'helpers'));
    } */
  },
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
  Document: ({ Html, Head, Body, children, state: { siteData, renderMeta } }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    [
      'react-static-plugin-source-filesystem',
      {
        location: path.resolve('./src/pages'),
      },
    ],
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap',
    'react-static-plugin-sass',
    'react-static-plugin-css-modules',
  ],
};

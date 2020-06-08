const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Gatsby Dev Env`,
    description: `Gatsby powered Development Environment for Frontend development`,
    author: `@dalisoft`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        pages: path.join(__dirname, "src/pages"),
        components: path.join(__dirname, "src/components"),
        redux: path.join(__dirname, "src/redux"),
        helpers: path.join(__dirname, "src/helpers"),
        translations: path.join(__dirname, "src/translations"),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

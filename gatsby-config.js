module.exports = {
  siteMetadata: {
    title: `Eberron Campaign`,
    description: `DND in the Ebetrron World.`,
    author: `@vbfischer`,
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: "./__generated/types/gatsby-graphql.ts",
        documentPaths: [
          "./src/**/*.{ts,tsx}",
          "./node_modules/gatsby-*/**/*.js",
        ],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-astronaut.png`, // This path is relative to the root of the site.
      },
    },
  ],
  mapping: {
    "MarkdownRemark.frontmatter.id": "ContinentsJson",
    "MarkdownRemark.frontmatter.world": "WorldJson",
    "MarkdownRemark.frontmatter.continent": "ContinentsJson",
    "ContinentsJson.nations": "NationsJson",
    "WorldJson.geography.continents": "ContinentsJson",
  },
}

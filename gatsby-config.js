/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `j8tvw0cs7n31`,
        accessToken: "crZoTexVXLCJ9BUwssn7l3IlCEoHe1qhmIHOuOJ-5EE",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-postcss`,
  ],
  siteMetadata: {
    title: "Local travels in Kenya",
    description:
      "Get to travel local places in Kenya and around the bush with easily accessible hikes and affordable rates",
    copyright: "Copyright under Ian Rioba",
    contact: "riobafelix@gmail.com",
  },
};

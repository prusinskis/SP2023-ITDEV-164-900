/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `SAP Blog`,
    description: `SP2023-ITDEV-164-900 Week 2 Activity 1`,
    author: `Sherise Prusinski`,
    siteUrl: `https://github.com/prusinskis/SP2023-ITDEV-164-900/`,
    contact: {
      name: `Sherise Prusinski`,
      company: `Blogs Inc.`,
      address: `PO Box 1234`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        //Contentful API Token
        spaceId: `kp2jz6350fzu`,
        accessToken: `VySpc_9Q05wCWBj_Yg48aFR6C24-FdTXLqLpSKEixhA`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

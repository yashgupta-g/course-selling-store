/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.devlopment`,
  
})
module.exports = {

  

  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },

  flags: {
    DEV_SSR: true,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,


    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '6baaemcy5gsg',
        accessToken: 'LjgR8QbiZ9CtVuRhuTLoUXilo6ghzD-0NEDW5oCUQS8',
      },
    }, 

{
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: 'OGU4OWUxNTgtNzQ5Mi00NGU0LThlOTAtNGU0MTBkZDljNzEwNjM4Mjc0NTg2Mjc3NzkxNDQx',
        autopop: true

        
			}
		},






  ],
}

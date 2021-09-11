module.exports = {
  siteMetadata: {
    title: `そこんところ工房`,
    description: `いろいろやってるサークル、そこんところ工房のWebsiteです。内側に何人かいます。`,
    author: `@skntkr_factory`,
    siteUrl: `https://www.sokontokoro-factory.net/`
  },
  plugins: [
    // https://chakra-ui.com/guides/integrations/with-gatsby#usage
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/image/hammer.png`
      }
    },
    `gatsby-plugin-gatsby-cloud`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}

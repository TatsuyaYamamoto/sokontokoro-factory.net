module.exports = {
  siteMetadata: {
    twitterId: `@skntkr_factory`,
    siteBaseUrl: `https://www.sokontokoro-factory.net`,
    defaultOgpImageUrl: "https://www.sokontokoro-factory.net/__ogp/www.jpg",
    i18n: {
      defaultLanguage: "ja",
      languages: ["ja", "en"]
    }
  },
  plugins: [
    // https://chakra-ui.com/guides/integrations/with-gatsby#usage
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`UA-127664761-3`],
        pluginConfig: {
          head: true
        }
      }
    },
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
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown`,
        name: `markdown`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      }
    }
  ]
}

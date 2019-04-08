module.exports = {
  siteMetadata: {
    title: `LA Devs`,
    description: `We are an inclusive, Los Angeles based technology community focused on helping each other grow through knowledge sharing and friendships`,
    author: `Jasmin && Ryan`,
  },
  plugins: [
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
        name: `LA Devs`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffba5a`,
        theme_color: `#ffba5a`,
        display: `minimal-ui`,
        icon: `src/images/la-devs-logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/favicon.png`,
      },
    },
  ],
}

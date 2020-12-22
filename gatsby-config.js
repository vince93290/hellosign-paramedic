module.exports = {
  siteMetadata: {
    title: 'hellosign-paramedic',
    siteUrl: 'https://paramedic.fr'
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    }
  ]
}

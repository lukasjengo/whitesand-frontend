module.exports = {
  siteMetadata: {
    title: 'Musician · composer · producer',
    titleTemplate: '%s | Whitesand',
    description:
      'Cinematic music composer and producer. Creator of royalty-free music YouTube channel Whitesand.',
    url: 'https://www.whitesandmusic.com',
    image: '/images/logo-dark.png',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'music',
        path: './src/assets/music/',
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Whitesand',
        short_name: 'Whitesand',
        start_url: '/',
        background_color: '#111111',
        theme_color: '#ECE9E4',
        display: 'standalone',
        icon: 'src/assets/images/logo-dark.png',
      },
    },
  ],
};

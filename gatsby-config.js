const manifestOptions = {
  name: "Riccardo Canella",
  short_name: "RCanella",
  start_url: "/",
  background_color: "#282828",
  theme_color: "#282828",
  display: "standalone",
  icon: "src/imgs/icon.png"
}

const analyticsOptions = {
  trackingId: "UA-55764472-1",
  head: true,
  anonymize: true,
}

const rootDir = './';

const offilineOptions = {
  cacheId: `canellariccardo-cache`,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/backend.canellariccardo\.it\/medium/,
      handler: 'networkFirst',
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|tiff)$/,
      handler: `networkFirst`,
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: 'Riccardo Canella',
  },
  plugins: [ 
    `gatsby-plugin-sass`, 
              {
                resolve: `gatsby-plugin-react-helmet`
              },
              {
                resolve: `gatsby-plugin-manifest`,
                options: manifestOptions,
              },
              {
                resolve: `gatsby-plugin-google-analytics`,
                options: analyticsOptions
              },
              {
                resolve: `gatsby-plugin-offline`,
                options: offilineOptions
              }
          ]
};
var manifestOptions = {
  name: "Riccardo Canella",
  short_name: "RCanella",
  start_url: "/",
  background_color: "#282828",
  theme_color: "#282828",
  display: "standalone",
  icon: "src/imgs/icon.png"
}

var faviconOptions = {
  logo: "./src/imgs/favicon.png",
  injectHTML: true,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: true,
    twitter: false,
    yandex: false,
    windows: false
  }
}

var analyticsOptions = {
  trackingId: "UA-55764472-1",
  head: true,
  anonymize: true,
}

module.exports = {
  siteMetadata: {
    title: 'Riccardo Canella',
  },
  plugins: [{
                resolve: `gatsby-plugin-sass`
              }, 
              {
                resolve: `gatsby-plugin-react-helmet`
              },
              {
                resolve: `gatsby-plugin-manifest`,
                options: manifestOptions,
              },
              {
                resolve: `gatsby-plugin-favicon`,
                options: faviconOptions
              },
              {
                resolve: `gatsby-plugin-google-analytics`,
                options: analyticsOptions
              }
           ]
};

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [ 'gatsby-plugin-sass', 
              'gatsby-plugin-react-helmet',
              {
                resolve: `gatsby-plugin-manifest`,
                options: {
                  name: "Riccardo Canella",
                  short_name: "RCanella",
                  start_url: "/",
                  background_color: "#282828",
                  theme_color: "#282828",
                  display: "standalone",
                  icon: "src/imgs/icon.png"
                },
              },
              {
                resolve: `gatsby-plugin-favicon`,
                options: {
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
              }
           ]
};

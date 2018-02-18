// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const {
  root,
  src,
  public,
  dist,
  exclude,
  browserList
} = require('../config/config')

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.(ttf|woff|otf|png|svg|jpg)$/,
        use: [
          'url-loader?limit=10000',
          {
            loader: 'img-loader',
            options: {
              enabled: true,
              gifsicle: {
                interlaced: false
              },
              mozjpeg: {
                progressive: true,
                arithmetic: false
              },
              optipng: false,
              pngquant: {
                floyd: 0.5,
                speed: 2
              },
              svgo: {
                plugins: [{ removeTitle: true }, { convertPathData: false }]
              }
            }
          },
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': src
    }
  }
}

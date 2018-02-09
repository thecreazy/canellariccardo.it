const webpack = require('webpack')
const Config = require('webpack-config').default

// Configuration
const { exclude } = require('./config')

module.exports = new Config().extend('config/webpack.default.config.js').merge({
  entry: {
    vendors: ['react']
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['es2015', { modules: false }], 'react']
            }
          }
        ],
        exclude: exclude
      }
    ]
  }
})

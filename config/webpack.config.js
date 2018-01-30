require('dotenv').config()
const config = require('webpack-config')
const { environment } = require('webpack-config')
const { ConfigCache } = require('webpack-config')

environment.setAll({
	env: () => process.env.NODE_ENV,
	template: () => 'react'
})

const Config = config.default

module.exports = new Config().extend('config/webpack.[template].config.js')

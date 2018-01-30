const { resolve } = require('path')
const webpack = require('webpack')
const Config = require('webpack-config').default

// List of imported plugins
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractText = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')
const HtmlCriticalPlugin = require("html-critical-webpack-plugin")
// const ImageminPlugin = require('imagemin-webpack-plugin').default

// Configuration
const {
	root,
	src,
	public,
	dist,
	exclude,
	browserList
} = require('./config')

module.exports = new Config().merge({
	context: src,
	entry: {
		main: './index.js'
	},
	output: {
		path: dist,
		filename: '[name].[hash:8].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@': src
		}
	},
	// Dev server configuration
	devServer: {
		contentBase: public,
		port: process.env.APP_PORT,
		host: process.env.APP_HOST,
		watchContentBase: true,
		stats: 'errors-only'
	},
	module: {
		rules: [
			// Lint task with enforce 'pre'
			// {
			//   enforce: 'pre',
			// },
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							['es2015', { modules: false }]
						]
					}
				}],
				exclude: exclude
			},
			{
				test: /\.(ttf|woff|otf|png|svg|jpg)$/,
				use: [
					'url-loader?limit=10000',
					{
						loader: 'img-loader',
						options: {
							enabled: process.env.production,
							gifsicle: {
								interlaced: false
							},
							mozjpeg: {
								progressive: true,
								arithmetic: false
							},
							optipng: false, // disabled
							pngquant: {
								floyd: 0.5,
								speed: 2
							},
							svgo: {
								plugins: [
									{ removeTitle: true },
									{ convertPathData: false }
								]
							}
						}
					},
					'file-loader'
				],
				exclude: exclude
			}
		]
	},
	// Plugins
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': process.env.production ? JSON.stringify('production') : JSON.stringify('development')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors',
			minChunks: function (module) {
				// this assumes your vendor imports exist in the node_modules directory
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),
		// Inject bundles to index.html
		new HtmlWebpackPlugin({
			inject: true,
			template: resolve(__dirname, '../public/index.html'),
			minify: {
				removeComments: process.env.production,
				collapseWhitespace: process.env.production,
				removeRedundantAttributes: process.env.production,
				useShortDoctype: process.env.production,
				removeEmptyAttributes: process.env.production,
				removeStyleLinkTypeAttributes: process.env.production,
				keepClosingSlash: process.env.production,
				minifyJS: process.env.production,
				minifyCSS: process.env.production,
				minifyURLs: process.env.production
			}
		}),
		// Clean dist folder and exclude some files
		new CleanWebpackPlugin([
			dist
		], {
			root: root,
			verbose: true,
			dry: false
		}),
		// Copy all statics files to dist
		new CopyWebpackPlugin([{
			context: src,
			from: './static',
			to: dist
		}]),
		// Optim images
		// new ImageminPlugin({
		//   disable: !process.env.production,
		//   pngquant: {
		//     quality: '95-100'
		//   }
		// })
		...(!process.env.production ? [
			// DEVELOPMENT ENV
			new webpack.HotModuleReplacementPlugin()
		] : [
			// PRODUCTION ENV
			new ExtractText('[name].[contenthash:8].css'),
			new BabiliPlugin()
		]),
		...(process.env.analyzing ? [
			new BundleAnalyzerPlugin()
		] : [])
	],
	// We generate sourcemaps in production. This is slow but gives good results.
	// You can exclude the *.map files from the build during deployment.
	devtool: process.env.production ? 'source-map' : 'eval'
})

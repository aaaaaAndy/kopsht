const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { resolve, PROJECT_PATH } = require('./lib');

module.exports =  {
	mode: 'production',
	output: {
		path: resolve(PROJECT_PATH, 'build'),
		filename: '[name].[contenthash:8].js',
		chunkFilename: '[name].[contenthash:8].chunk.js',
		publicPath: './',
		globalObject: 'this',
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					parse: {
						ecma: 8,
					},
					compress: {
						ecma: 5,
						warnings: false,
						comparisons: false,
						inline: 2,
					},
					mangle: {
						safari10: true,
					},
					keep_classnames: true,
					keep_fnames: true,
					output: {
						ecma: 5,
						comments: false,
						ascii_only: true,
					},
				},
				parallel: true,
			}),
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					parser: safePostCssParser,
					map: false,
				},
				cssProcessorPluginOptions: {
					preset: ['default', { minifyFontValues: { removeQuotes: false } }],
				},
			}),
		],
		splitChunks: {
			chunks: 'all',
			name: false,
		},
		runtimeChunk: {
			name: entrypoint => `runtime-${entrypoint.name}`,
		},
	},
	plugins: [
		new CleanWebpackPlugin()
	]
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, PROJECT_PATH } = require('./lib');

// webpack通用配置
module.exports = {
	entry: resolve(PROJECT_PATH, 'src/index.js'),
	resolve: {
		alias: {
			'@': resolve(PROJECT_PATH, 'src'),
		},
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.js|jsx$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader',
					{
						loader: "px2rem-loader",
						options: {
							remUnit: 75,
							remPrecision: 8,
						},
					},
				]
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'statics/[name].[hash:8].[ext]'
				}
			},
			{
				loader: 'file-loader',
				exclude: [/\.(js|jsx|ts|tsx|less|css|bmp|gif|jpg|jpeg|png)$/, /\.html$/, /\.json$/],
				options: {
					name: 'statics/[name].[hash:8].[ext]'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(PROJECT_PATH, 'src/template/index.html'),
			filename: 'index.html'
		})
	]
}

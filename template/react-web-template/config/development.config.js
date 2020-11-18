const { resolve, PROJECT_PATH } = require('./lib');

// webpack开发环境配置
module.exports = {
	mode: 'development',
	output: {
		path: undefined,
		pathinfo: true,
		filename: 'bundle.js',
		chunkFilename: '[name].chunk.js',
		publicPath: '../',
		globalObject: 'this',
	},
	devServer: {
		host: '0.0.0.0',
		port: 8000,
		hot: true,
		open: true,
		noInfo: true,
		compress: true,
		useLocalIp: true,
		disableHostCheck: true,
		historyApiFallback: true,
		proxy: {
			'/api': {
				// 接口代理到的的域名
				// 代理结果：/api/xxx ————> http://localhost:3000/api/xxx
				target: 'http://localhost:3000',
				// 如果是https接口，当证书无效或者不想校验证书时
				secure: false,
				// 如果接口跨域，是否允许跨域
				changeOrigin: true,
			},
		}
	}
}

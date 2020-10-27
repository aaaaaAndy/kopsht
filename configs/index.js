const path = require('path');

const resolve = path.resolve;

// 当前node工作目录
const CURRENT_PATH = process.cwd();
// kopsht根目录
const KOPSHT_PATH = resolve(__dirname, '../');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

module.exports = {
	CURRENT_PATH,
	KOPSHT_PATH,

	DEVELOPMENT,
	PRODUCTION,

	TEMPLATE: {
		WEB: resolve(KOPSHT_PATH, 'template/kopsht-web-template')
	},

	// 默认启动参数
	DEFAULT_ENV: DEVELOPMENT,
	DEFAULT_HOST: '0.0.0.0',
	DEFAULT_PORT: 8000,

	// kopsht配置文件名
	KOPSHT_CONFIG_NAME: 'kopsht/index.js',
}

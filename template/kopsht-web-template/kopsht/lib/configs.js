const { resolve } = require('./utils');

// 当前项目根路径及项目名
const PROJECT_PATH = resolve(__dirname, '../../');
const PROJECT_NAME = PROJECT_PATH.split('/').pop();

module.exports = {
	PROJECT_PATH,
	PROJECT_NAME,
}

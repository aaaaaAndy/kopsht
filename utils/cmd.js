const childProcess = require('child_process');
const { loading } = require('./output');

/**
 * 判断命令是否存在
 * @param {string} cmd 待验证命令
 * @param {string} path 命令执行路径
 * @return {boolean} true：该命令存在，false：该命令不存在
 * @example
 * 	isExistCmd('yarn -v', './');
 */
function isExistCmd(cmd, path) {
	path = path || './';

	try {
		childProcess.execSync(cmd, { cwd: path });
		return true;
	} catch (e) {
		return false;
	}
}

/**
 * 通用执行命令方法
 * @param cmd
 * @param path
 */
function execCmd(cmd, path) {
	childProcess.execSync(
		cmd,
		{
			cwd: path,
			stdio: 'inherit'
		}
	)
}

/**
 * 执行yarn install命令
 * @param path
 */
function execYarnInstall(path) {
	const spinner = loading('start install dependencies...');
	spinner.start();

	if (isExistCmd('yarn -v', path)) {
		execCmd('yarn', path);
	} else {
		execCmd('npm install', path);
	}

	spinner.succeed('initialize success!!!');
}

module.exports = {
	execCmd,
	isExistCmd,
	execYarnInstall,
}

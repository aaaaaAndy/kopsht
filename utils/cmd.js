const childProcess = require('child_process');
const { loading } = require('./output');

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
	execCmd('yarn', path);
	spinner.succeed('initialize success!!!');
}

module.exports = {
	execCmd,
	execYarnInstall,
}

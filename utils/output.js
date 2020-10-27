const chalk = require('chalk');
const ora = require('ora');

log = console.log;
warn = console.warn;
error = console.error;

/**
 * 输出日志提示信息
 * @param {string} msg 提示信息
 */
function print(msg) {
	log(chalk.green(msg));
}

/**
 * 成功输出✅
 * @param {string} msg 成功信息
 */
function success(msg) {
	log(chalk.green(`✅ success：${msg}`));
}

/**
 * 输出警示信息⚠️
 * @param {boolean} condition 校验条件，为false时才输出信息
 * @param {string} msg 警示信息
 */
function warning(condition, msg) {
	if (!condition) {
		warn(chalk.yellow(`⚠️ warning：${msg}`));
	}
}

/**
 * 输出错误信息❌
 * @param {boolean} condition 校验条件，为false才输出错误
 * @param {string} err 错误信息
 */
function validate(condition, err) {
	if (!condition) {
		error(chalk.red(`❌ error：${err}`));
	}
}

function loading(txt) {
	return ora(chalk.green(txt));
}

module.exports = {
	print,
	success,
	warning,
	validate,
	loading,
}

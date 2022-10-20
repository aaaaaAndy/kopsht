const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const {
	loading,
	validate,
} = require('./output');
const {
	CURRENT_PATH,
	KOPSHT_CONFIG_NAME,
} = require('../configs');

const resolve = path.resolve;

/**
 * 获取文件的绝对路径
 * @param {string} filename 文件名
 * @param {string} [dirname] 输入路径
 * @return {string} 绝对路径
 */
function getAbsolutePath(filename, dirname) {
	validate(!!filename, 'please input a filename!!!');

	const path = !!dirname ? dirname : CURRENT_PATH;

	if (filename) {
		return resolve(path, filename);
	}
}

/**
 * 判断文件是否存在
 * @param {string} file 可以单独传一个文件名，默认拼接当前目录，也可以传一个完整路径
 * @return {boolean} true：存在，false：不存在
 * @example
 * 1. 单独传入一个文件名
 * fileExists('config.js');
 * 2. 传入当前文件的绝对路径
 *  fileExists('/Users/andy/react/config.js')
 */
function fileExists(file) {
	const currentPath = file.indexOf('/') < 0
		? `${CURRENT_PATH}/${file}`
		: file;

	return fs.existsSync(currentPath);
}

/**
 * 获取kopsht配置文件
 * @return {object} 配置文件内容
 */
function getKopshtConfig(mode) {
	const configPath = getAbsolutePath(KOPSHT_CONFIG_NAME);
	const config = fileExists(configPath)
		? require(configPath)(mode)
		: {};

	return config;
}

/**
 * 创建项目
 * @param {string} src
 * @param {string} dest
 * @return {undefined}
 */
function createProject(src, dest) {
	const spinner = loading('start create project...');

	spinner.start();
	fsExtra.copySync(src, dest);
	spinner.succeed('create finished!!!');
}

/**
 * 替换指定文件的特定字符串
 * @param  {string} src    文件路径
 * @param  {string} oldStr 待替换旧字符
 * @param  {string} newStr 新字符
 */
function replaceFileStr(src, oldStr, newStr) {
  const file = fs.readFileSync(src, 'utf-8');
  var newFile = file.replace(oldStr, newStr);
  fs.writeFileSync(src, newFile, 'utf-8');
}

module.exports = {
	resolve,
	getAbsolutePath,
	fileExists,
	getKopshtConfig,
	createProject,
  replaceFileStr,
}

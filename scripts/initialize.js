const {
	TEMPLATE,
	CURRENT_PATH,
} = require('../configs');
const {
  resolve,
	validate,
	createProject,
	getAbsolutePath,
	execYarnInstall,
  replaceFileStr,
} = require('../utils');

/**
 * 初始化一个项目
 * @param projectName
 */
function initialize(projectName, type) {

	if (!projectName) {
		validate(!!projectName, 'need input a project name!!!');
		return;
	}

	projectName = projectName !== '.' ? projectName : './';
	const projectPath = getAbsolutePath(projectName, CURRENT_PATH);
	const templatePath = TEMPLATE[type];

	createProject(templatePath, projectPath)

  replaceFileStr(resolve(projectPath, 'package.json'), '$$projectName$$', projectName);
  replaceFileStr(resolve(projectPath, 'index.html'), /\$\$projectName\$\$/g, projectName);

  // docsify 不用执行 yarn install
  if (type !== 'DOCSIFY') {
  	execYarnInstall(projectPath);
  }
}

module.exports = initialize;

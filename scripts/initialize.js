const {
	TEMPLATE,
	CURRENT_PATH,
} = require('../configs');
const {
	validate,
	createProject,
	getAbsolutePath,
	execYarnInstall,
} = require('../utils');

/**
 * 初始化一个项目
 * @param projectName
 */
function initialize(projectName) {

	if (!projectName) {
		validate(!!projectName, 'need input a project name!!!');
		return;
	}

	projectName = projectName !== '.' ? projectName : './';
	const projectPath = getAbsolutePath(projectName, CURRENT_PATH);

	createProject(TEMPLATE.WEB, projectPath)

	execYarnInstall(projectPath);
}

module.exports = initialize;

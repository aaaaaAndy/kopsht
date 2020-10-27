const webpack = require('webpack');
const { PRODUCTION } = require('../configs');
const {
	print,
	success,
	validate,
	getKopshtConfig,
} = require('../utils');

function build(cmd) {
	const mode = cmd.env || PRODUCTION;
	const kopshtConfig = getKopshtConfig(mode);

	print('start building...');
	webpack(kopshtConfig, function (err, status) {
		if (err) {
			validate(false, err.message);
		}

		success('build success!!!');
	})
}

module.exports = build;

const { merge } = require('webpack-merge');
const commonConfig = require('./common.config');
const productionConfig = require('./production.config');
const developmentConfig = require('./development.config');

module.exports = function (type) {
	switch (type) {
		case 'development':
			return merge(commonConfig, developmentConfig);
		case 'production':
			return merge(commonConfig, productionConfig);
		default:
			throw new Error('No matching configuration was found!');
	}
}

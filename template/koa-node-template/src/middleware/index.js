const bodyParser = require('koa-bodyparser');
const logger = require('./logger');

module.exports = function (app) {
	app.use(bodyParser());

	// 自定义middleware
	app.use(logger);
}

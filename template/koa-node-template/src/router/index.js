const Router = require('koa-router');
const routers = require('../controller');

const router = new Router();

module.exports = function(app) {
	routers && routers.forEach((route) => {
		router.use(
			route.path,
			route.controller.routes(),
			route.controller.allowedMethods()
		);
	})

	app.use(router.routes())
		.use(router.allowedMethods());
}

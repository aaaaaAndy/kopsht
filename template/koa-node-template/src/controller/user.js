const Router = require('koa-router');

const User = new Router();

User.get('/info', (ctx) => {
	ctx.body = 'my name is aaaaaandy';
})

module.exports = User;

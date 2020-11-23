const Router = require('koa-router');

const Home = new Router();

Home.get('/', (ctx) => {
	ctx.body = 'welcome to koa home page';
})

module.exports = Home;

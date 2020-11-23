const Koa = require('koa');
const middleware = require('./src/middleware');
const router = require('./src/router');

const app = new Koa();

middleware(app);

router(app);

app.listen(3000, () => {
	console.log('this project is running at http://localhost:3000');
});


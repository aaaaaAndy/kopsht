const Home = require('./home');
const User = require('./user');

module.exports = [
	{ path: '/', controller: Home },
	{ path: '/user', controller: User },
]

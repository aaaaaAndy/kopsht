const cmd = require('./cmd');
const file = require('./file');
const device = require('./device');
const output = require('./output');

module.exports = {
	...cmd,
	...file,
	...device,
	...output,
}

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');
const {
	success,
	validate,
	getRunningIp,
	getKopshtConfig,
} = require('../utils');
const {
	DEFAULT_ENV,
	DEFAULT_HOST,
	DEFAULT_PORT,
} = require('../configs');

function serve(cmd) {
	const mode = cmd.env || DEFAULT_ENV;

	const kopshtConfig = getKopshtConfig(mode);
	const { devServer = {}, ...webpackConfig } = kopshtConfig;

	const port = cmd.port || devServer.port || DEFAULT_PORT;
	const host = getRunningIp(cmd.host || devServer.host || DEFAULT_HOST);
	const devServerConfig = merge(devServer, { host, port })

	const compiler = webpack(webpackConfig);
	const server = new WebpackDevServer(compiler, devServerConfig);

	server.listen(port, host, function (err) {
		if (err) {
			validate(false, err);
		} else {
			success(`The project is running on: http://${host}:${port}`);
		}
	})
}

module.exports = serve;

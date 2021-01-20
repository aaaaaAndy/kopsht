const os = require('os');

/**
 * 获取当前主机的ipv4地址
 * @return {string} ip地址
 */
function getIPAddress() {
	const interfaces = os.networkInterfaces();
	for (let devName in interfaces) {
		const iface = interfaces[devName];
		for (let i = 0; i < iface.length; i++) {
			const alias = iface[i];
			if (
				alias.family === 'IPv4'
				&& alias.address !== '127.0.0.1'
				&& !alias.internal
			) {
				return alias.address;
			}
		}
	}
}

/**
 * 获取当前项目运行的ip地址
 * 本方法主要将localhost, 0.0.0.0, 127.0.0.1转换为实际的ipv4地址
 * @param {string} host 配置的ip地址
 */
function getRunningIp(host) {
	const selfIp = [
		'0.0.0.0',
		'127.0.0.1'
	];

	if (selfIp.includes(host)) {
		return getIPAddress();
	} else {
		return host;
	}
}

module.exports = {
	getIPAddress,
	getRunningIp,
}

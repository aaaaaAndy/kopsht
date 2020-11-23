module.exports = function (ctx, next) {
	next();

	const {
		request: { method, url },
		response: { status, message, body }
	} = ctx;

	console.log(`request: ${method} ${url}；response: ${status} ${message} ${JSON.stringify(body)}}`);
}

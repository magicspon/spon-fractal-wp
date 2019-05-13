module.exports = compiler => ({
	middleware: [
		require('webpack-dev-middleware')(compiler, {
			stats: 'errors-only',
			publicPath: global.PATHS.js.publicPath
		}),
		require('webpack-hot-middleware')(compiler)
	]
})

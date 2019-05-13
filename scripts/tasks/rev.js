const gulp = require('gulp')
const source = require('vinyl-source-stream')
const { getCMSPath, getThemeDir } = require('../utils/paths')

module.exports = function(done) {
	const stamp = PRODUCTION ? `.${global.TASK.stamp}` : ''

	const map = {
		'/app/themes/spon-theme/dist/css/style.css': `/app/themes/spon-theme/dist/css/style${stamp}.css`,
		'/app/themes/spon-theme/dist/js/app.bundle.js': `/app/themes/spon-theme/dist/js/app.bundle${stamp}.js`
	}

	const stream = source('manifest.json')
	stream.end(JSON.stringify(map, null, 2))
	stream.pipe(gulp.dest(getCMSPath()))
	done()
}

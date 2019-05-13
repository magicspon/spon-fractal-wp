const gulp = require('gulp')
const source = require('vinyl-source-stream')
const { getCMSPath } = require('../utils/paths')

module.exports = function(done) {
	const stamp = PRODUCTION ? `.${global.TASK.stamp}` : ''
	const {
		PATHS: { themeDir }
	} = global

	// prettier-ignore
	const map = {
		[`${themeDir}dist/css/style.css`]: `${themeDir}dist/css/style${stamp}.css`,
		[`${themeDir}dist/js/app.bundle.js`]: `${themeDir}dist/js/app.bundle${stamp}.js`
	}

	const stream = source('manifest.json')
	stream.end(JSON.stringify(map, null, 2))
	stream.pipe(gulp.dest(getCMSPath()))
	done()
}

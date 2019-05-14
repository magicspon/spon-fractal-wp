const del = require('del')
const { getPublicPath, getThemeDir } = require('../utils/paths')

const clean = () => {
	return del([
		getThemeDir('dist/**'),
		getThemeDir('fonts/**'),
		getThemeDir('_partials/**'),
		getPublicPath('dist/**'),
		getPublicPath('fonts/**'),
		getPublicPath('*.+(jpg|jpeg|png|gif|svg|css|js|json|webmanifest)')
	])
}

module.exports = clean

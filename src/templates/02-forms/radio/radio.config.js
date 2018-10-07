module.exports = {
	status: 'test',

	context: {
		attr: '',
		id: 'input-default'
	},

	variants: [
		{
			name: 'disabled',
			context: {
				attr: 'disabled',
				id: 'input-disabled'
			}
		},
		{
			name: 'checked',
			context: {
				attr: 'checked',
				id: 'input-checked'
			}
		}
	]
}

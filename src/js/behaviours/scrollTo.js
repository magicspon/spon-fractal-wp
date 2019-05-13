import { withPlugins } from '@spon/core'
import withDomEvents from '@/plugins/withDomEvents'

function scrollTo({ plugins: { addEvents } }) {
	function onClick(e) {
		e.preventDefault()
	}

	addEvents(document, {
		'click [data-scroll-to]': onClick
	})
}

export default withPlugins(withDomEvents)(scrollTo)

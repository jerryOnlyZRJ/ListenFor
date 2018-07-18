quill.on('text-change', (delta) => {
	console.log(delta)
	autoSave()
})

function getContents() {
	quill.setContents(JSON.parse(sessionStorage.getItem('content')))
}

function updateContent() {
	sessionStorage.setItem('content', JSON.stringify(quill.getContents()))
}

function debounce(fn, delay) {
	delay = delay || 300
	var timer
	return function() {
		if(!timer) {
			timer = setTimeout(() => {
				fn()
				clearTimeout()
				timer = null
			}, delay)
		}
	}
}
var autoSave = debounce(updateContent, 2000)
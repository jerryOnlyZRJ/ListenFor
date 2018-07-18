function startRecognize() {
	const options = {
		engine: 'iFly',
		lang: 'zh-cn',
		continue: true
	};
	plus.speech.startRecognize(options, function(res) {
		quill.insertText(quill.getLength(), res, true)
	}, function(e) {
		console.log(e)
	});
}

function stopRecognize() {
	plus.speech.stopRecognize();
}

const speechBtn = document.querySelector('.speech-btn')
speechBtn.addEventListener('tap', function() {
	if(speechBtn.dataset.state === 'stop') {
		startRecognize()
		speechBtn.dataset.state = 'speeching'
		speechBtn.innerText = '停止识别'
	} else {
		stopRecognize()
		speechBtn.dataset.state = 'stop'
		speechBtn.innerText = '语音识别'
	}
})
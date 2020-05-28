
////// Variable holding interface elements
var transcription = document.getElementById('transcription');
var log = document.getElementById('log');
var start = document.getElementById('speechButton');
var copy = document.getElementById('copy-all');
var translatehanyu = document.getElementById('hanyu');
var speaking = false;

////// Is speech supported?
window.SpeechRecognition = window.SpeechRecognition ||
	window.webkitSpeechRecognition ||
	null;
if (window.SpeechRecognition === null) {
	document.getElementById('unsupported').classList.remove('hidden');
	start.classList.add('hidden');
} else {
	var recognizer = new window.SpeechRecognition();
	// Recogniser doesn't stop listening even if the user pauses
	recognizer.continuous = false;
	// Start recognising
	recognizer.onresult = function(event) {
		//transcription.textContent = '';
		for (var i = event.resultIndex; i < event.results.length; i++) {
			if (event.results[i].isFinal) {
				transcription.textContent = event.results[i][0].transcript;
			} else {
				transcription.textContent += event.results[i][0].transcript;
			}
		}
	};
	// Listen for errors
	recognizer.onerror = function(event) {
		log.innerHTML = '系统故障: ' + event.message + '<br />' + log.innerHTML;
		location.reload();
	};

	start.addEventListener('click', function() {
		//toggle
		//if (!speaking) {
			speaking = true;
			// start.classList.toggle('stop');
			// Set if we need interim results
			recognizer.interimResults = document.querySelector('input[name="recognition-type"][value="interim"]').checked;
			try {
				recognizer.lang = 'cmn-Hans-CN';
				recognizer.start();
				//log.innerHTML = '请开始对着麦克风讲话<br/>点击停止与删除文字';
			} catch (ex) {
				log.innerHTML = '系统故障:<br/>' + ex.message;
				location.reload();
			}
		/*} else {
			recognizer.stop();
			start.classList.toggle('stop');
			transcription.textContent = '';
			log.innerHTML = '识别已停止<br/>点击启动麦克风';
			speaking = false;
		} */
	});

	copy.addEventListener('click', function() {
		transcription.select();
		document.execCommand("copy");
	});

	function glosbe(searchChi){
		var apiurl="https://glosbe.com/transliteration/api?from=Han&dest=Latin&format=json&text="+decodeURIComponent(transcription.value);

		$.ajax({
		url: apiurl,
		success: function(result){
			hanyu.value=result;
		}});
	}

	translatehanyu.addEventListener('click', function() {
		glosbe(transcription.value);
	});	
}


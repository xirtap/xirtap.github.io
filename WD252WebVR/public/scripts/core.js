var __chatVR = (function(){

	'use strict';

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.AudioContext = window.AudioContext || window.webkitAudioContext;

	window.startRecording = 0;

	const queryString = window.location.search.substring(1);
	const queryParams = {};
	queryString.split('&').forEach(param => {
		const separate = param.split('=');
		queryParams[separate[0]] = separate[1];
	});

	var socket = undefined;

	const audioContext = new AudioContext();

	const mediaConstraints = {video: false, audio: true };
	var mediaRecorder = undefined;
	var recording = false;
	
	const maxRecordingLength = 6000;

	var triggerDown = false;

	const pile = document.querySelector('#chatpile');

	var chatters = {};
	const defaultImage = '/assets/images/default.jpg';

	function generateWaveform(audio){
		
		return new Promise(function(resolve, reject){

			const wEl = document.createElement('div');
			const unique = Math.random() * 1000;
			const identifier = `[data-identifier="${unique}"]`
			wEl.dataset.identifier = unique;
			document.body.appendChild(wEl);

			const wavesurfer = WaveSurfer.create({
				container: identifier,
				waveColor: '#fe5a9b',
				maxCanvasWidth: 200,
				interact: false
			});

			wavesurfer.load(audio);

			wavesurfer.on('ready', function () {
				resolve( [document.querySelector(`${identifier} canvas`).toDataURL(), wavesurfer ]);
				document.querySelector(identifier).parentNode.removeChild(wEl);
			}.bind(this));

		});

	}

	function addToPile(user){

		const entity = document.createElement('a-entity');
		const plane = document.createElement('a-plane');
		const userImage = document.createElement('a-image');

		entity.setAttribute('class', 'chatitem');

		if(user.name === queryParams.screenname){
			entity.setAttribute('position', '2.5 0 -1');
		} else {
			entity.setAttribute('position', '-2.5 0 -1');
		}

		plane.setAttribute('color', '#f5f5f5');
		plane.setAttribute('height', '3');
		plane.setAttribute('width', '9');

		userImage.setAttribute('src', user.image);
		userImage.setAttribute('position', '-3.1 0 0.1');
		userImage.setAttribute('width', '2.5');
		userImage.setAttribute('height', '2.5');

		plane.appendChild(userImage);
		entity.appendChild(plane);

		const existingMessages = pile.querySelectorAll('.chatitem');
		Array.from(existingMessages).forEach(function(msg){
			const currentPosition = msg.getAttribute('position');
			const newPosition = `${currentPosition.x} ${currentPosition.y + 4} -1`;

			const oldAnimation = msg.querySelector('a-animation');

			if(oldAnimation !== null){
				msg.removeChild(oldAnimation);
			} 

			const newAnimation = document.createElement('a-animation');
			newAnimation.setAttribute('attribute', 'position');
			newAnimation.setAttribute('from', Object.keys(currentPosition).map(V => {return `${currentPosition[V]} ` } ).join(' ') );
			newAnimation.setAttribute('to', newPosition);
			newAnimation.setAttribute('dur', 500);
			
			msg.appendChild(newAnimation);

		}.bind(this));

		generateWaveform(user.audio)
			.then( res => {

				const wv = document.createElement('a-image');
				wv.setAttribute('src', res[0]);
				wv.setAttribute('position', '1.3 0 0.1')
				wv.setAttribute('width', '6');
				entity.appendChild(wv);

				if(user.name !== queryParams.screenname){
					res[1].play();
				}

			})
		;

		setTimeout(function(){
			pile.appendChild(entity);
		}, 500);

	}
	
	function onMediaSuccess(stream) {

		mediaRecorder = new MediaStreamRecorder(stream);
		mediaRecorder.mimeType = 'audio/wav'; 
		mediaRecorder.ondataavailable = function (blob) {

			var blobURL = URL.createObjectURL(blob);

			mediaRecorder.stop();
			window.stopRecording = true;
			mediaRecorder = undefined;

			var formData = new FormData();

			formData.append("clip", blob);
			formData.append('screenname', queryParams.screenname);

			var request = new XMLHttpRequest();
			request.open("POST", "/upload");
			request.send(formData);

			addToPile({
				image : queryParams.imageurl || defaultImage,
				name : queryParams.screenname,
				audio : blobURL
			});

		};	
		mediaRecorder.start(maxRecordingLength);
		window.startRecording = maxRecordingLength;
	
	}

	function onMediaError(e) {
		console.error('media error', e);
	}
	
	function addEvents(){

		window.addEventListener('touchstart', (e) => {

			if(!triggerDown){

				triggerDown = true;
				
				if(!recording){
					recording = true;
					navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
				}
		
			}

		}, false);

		window.addEventListener('touchend', (e) => {

			recording = false;

			if(mediaRecorder){
				mediaRecorder.stop();
			}

			window.stopRecording = true;

			setTimeout(function(){
				triggerDown = false;
			}.bind(this), 1500);

		}, false);

		socket.on('audiomessage', function(payload){

			if(payload.sender !== queryParams.screenname){
	
				addToPile({
					name : payload.sender,
					image : chatters[payload.sender] || defaultImage,
					audio : payload.source
				});

			}

		});

		socket.on('newchatter', function(payload){

			if(payload.screenname !== queryParams.screenname){

				if(chatters[payload.screenname] !== undefined){
					chatters[payload.screenname] = payload.imageurl;
				}

			}
		});

		socket.on('existingchatters', function(payload){
			chatters = payload.chatters;
		});

	}

	function init(){

		console.log("Initialised");
		
		if(queryParams.screenname === undefined || queryParams.screenname === ''){
			window.location = window.location.origin;
		}

		if(queryParams.imageurl !== undefined || queryParams.imageurl !== ""){
			queryParams.imageurl = window.decodeURIComponent(queryParams.imageurl);
		}
	
		socket = io();
		addEvents();

		socket.emit('newchatter', {
			screenname : queryParams.screenname,
			imageurl : queryParams.imageurl
		});

	}

	return{
		init : init
	};

})();

(function(){
	__chatVR.init();
})();
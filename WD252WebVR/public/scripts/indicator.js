	AFRAME.registerComponent('indicator', {
		init : function(){

			this.outputElement = this.el.querySelector('#indi')
			this.canvas = document.querySelector('#recordingCard');
			this.ctx = this.canvas.getContext('2d');
			this.padding = 10;
			this.barHeight = 20;

			this.center = [
				this.canvas.width / 2,
				this.canvas.height / 2
			]

			this.ctx.fillStyle = "#fe5a9b";
			this.ctx.font="14px Open Sans";

			this.start = 0;
			this.end = 0;
			this.total = 0;

			this.stoppedEarly = false;
			this.outputElement.setAttribute('src', this.canvas.toDataURL());

		},
		tick : function(){

			if(window.startRecording > 0){
				this.stoppedEarly = false;

				this.total = window.startRecording;
				this.start = Date.now();
				this.end = this.start + this.startRecording;
				this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

				this.lastRendered = performance.now();

				window.startRecording = 0;

			}

			if(window.stopRecording){
				this.stoppedEarly = true;
				window.stopRecording = false;
				this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
				this.outputElement.setAttribute('src', this.canvas.toDataURL());				
			}

			const perc = ( (Date.now() - this.start) / this.total ) * 100;
			const barWidth = ((this.canvas.width - this.padding * 2) / 100) * perc;
			const thisTime = performance.now()

			if(perc <= 100 && !this.stoppedEarly && thisTime - this.lastRendered > 33){
				this.ctx.fillStyle = "white";
				this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
				this.ctx.fillStyle = "#fe5a9b";
				this.ctx.fillRect( this.center[0] - barWidth / 2 , this.center[1] - this.barHeight / 2, barWidth, this.barHeight);

				this.ctx.fillStyle="#c41258";
				this.ctx.fillText("Recording...", 90, 37);

				this.lastRendered = thisTime;
				this.outputElement.setAttribute('src', this.canvas.toDataURL());
			}

		}
	});
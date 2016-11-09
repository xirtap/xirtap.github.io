const express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const fs = require('fs');
const querystring = require('querystring');
const request = require('request');
const multer = require('multer');
var upload = multer({ dest: './temp/uploads/' })
var port = process.env.PORT || 8080;

var path = require("path");
var temp_dir = path.join(process.cwd(), 'temp/');

if (!fs.existsSync(temp_dir + "uploads/")){
    fs.mkdirSync(temp_dir + "uploads/");
}

if (!fs.existsSync(temp_dir + "audio/")){
	fs.mkdirSync(temp_dir + "audio/");
}
for(var _ = 0; _ < process.argv.length; _ += 1){

	if(process.argv[_] === "--port" || process.argv[_] === "-port" || process.argv[_] === "-p"){

		if(process.argv[ _ + 1 ] !== undefined){
			port  = process.argv[_ + 1];
			break;
		}

	}

}

http.listen(port, function(){
  console.log(`listening on *:${port}`);
});

app.use(express.static(__dirname + '/public'));
app.use('/audio', express.static(__dirname + '/temp/audio'));

app.all('*', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  next();
 });

const chatters = {};

app.post('/upload', upload.single('clip'), function (req, res, next) {

	const sendinguser = req.body.screenname;
	console.log(req.file.destination, req.file.filename)
	const tempDestination = `${req.file.destination}${req.file.filename}`
	const publicDestination = `/audio/${req.file.filename}.wav`;
	const ultimateDestination = `./temp/audio/${req.file.filename}.wav`;

	console.log(`Sent from ${sendinguser}`,tempDestination, ultimateDestination);

	fs.readFile(tempDestination, (err, data) => {

		fs.writeFile(ultimateDestination, data, (err) => {
			if(err){
				console.log("Oops, that didn't save :(", err);
			} else {
				console.log(`File was saved at ${ultimateDestination}`);
				io.emit('audiomessage', {
					source : publicDestination,
					sender : sendinguser
				});
			} 
		})


	});

	res.end();

});

io.on('connection', function(socket){
	console.log('A user connected :D');

	socket.emit('existingchatters', {
		chatters : chatters
	})

	socket.on('newchatter', function(payload){
		console.log('newchatter', payload);
		if(chatters[payload.screenname] === undefined){
			chatters[payload.screenname] = payload.imageurl;
			io.emit('newchatter', payload);
		}

	});

});

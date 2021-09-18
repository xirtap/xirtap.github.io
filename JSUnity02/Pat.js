//var gameInstance = UnityLoader.instantiate("gameContainer", "Build/JS.json", {onProgress: UnityProgress});
//
// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/LCoU5ytbl/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(320, 240);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // Draw the emoji
  textSize(256);
//  text(emoji, width / 2, height / 2);
}


// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
  var outresult;
  switch(label){
	case "left":
		outresult="1";
		break;
	case "right":
		outresult="2";
		break;
	case "straight":
		outresult="3";
		break;
	default:
	        outresult="5";
  }
  document.getElementById("demo").innerHTML = "Result is " + label + "; outresult is " + outresult;
  //fl(label);
}

var gameInstance = UnityLoader.instantiate("unityContainer", "Build/webgl.json", {onProgress: UnityProgress});

function fl(outresult){
	//gameInstance.SendMessage("Nav","ctrl",value);
	gameInstance.SendMessage("Main Camera","ctrl",outresult);
}

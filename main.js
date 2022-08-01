function setup() {
video = createCapture(VIDEO)
video.size(550, 500);
canvas = createCanvas(550, 500);
canvas.position(550,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on(pose, gotPoses);

}

function draw() {
background("#44c799");    
}

function modelLoaded() {
console.log("model is loaded");
}

function gotPoses(results) {
if ( gotPoses > 0 ) {
  console.log(results);  
} 
}
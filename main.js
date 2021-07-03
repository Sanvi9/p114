noseX = 0;
noseY = 0;
function preload() {
    img = loadImage("https://i.postimg.cc/9FTQN32f/clownnose.png")
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}
function modelLoaded() {
    console.log("modelLoaded")

}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
;    }
}
function takeSnapshot() {
    save("FilterImage.png")
}

function draw() {
    image(video,0,0,300,300);
}

function draw() {
    image(video,0,0,300,300);
    //fill("red")
    //circle(noseX,noseY,25);
    image(img,noseX -10,noseY,25,25)
}
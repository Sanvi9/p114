;
leftEarX = 0;
leftEarY = 0;
function preload() {
    img1 = loadImage("https://i.postimg.cc/43YPMV1Z/crown-png-3128413.png")
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
        leftEarX = results[0].pose.rightEar.x;
        leftEarY = results[0].pose.rightEar.y;

;    }
}
function takeSnapshot() {
    save("FilterImage.png")
}

function draw() {
    image(video,0,0,300,300);
    //fill("red")
    //circle(noseX,noseY,25);
    image(img,noseX -10,noseY,25,25)
    image(img1,leftEarX,leftEarY -150,130,90)
}

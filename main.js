noseX=0
noseY=0

function preload(){
santaHat = loadImage('https://i.postimg.cc/6qD8CQgj/Santa-Hat-removebg.png');
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 500, 500);
    image(santaHat, noseX -125, noseY -280, 250, 300)
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results)
        console.log("nose x = " +results[0].pose.nose.x);
        console.log("nose y = " +results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " +noseX);
        console.log("nose y = " +noseY);
    }
}

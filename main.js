leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristy=0;
song="";


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length > 0){
        score = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist"+ score);
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = "+ rightWristY);
    }
}

function modelLoaded(){
    console.log('poseNet is intialized')
}
function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song=loadSound("music.mp3");
}

function play(){
    song.play();
}
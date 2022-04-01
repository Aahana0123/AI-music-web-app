music = "";
music1 = "";

function preload(){
music = loadSound("music.mp3");
music1 = loadSound("music2.mp3");
}

function setup(){
canvas=createCanvas(400 , 400);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on("pose" , gotPoses);
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results)
 
    }

}

function modelLoaded(){
    console.log("Model Loaded!")

}


function draw(){
image(video , 0 , 0 , 400 , 400)
}
song_1 = "";
song_2 = "";
left_x = 0;
right_x = 0;
left_y = 0;
right_y = 0;
video = "";
function preload(){
    song_1 = loadSound('harry_potter.mp3');
    song_2 - loadSound('Peter_Pan.mp3');
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("model is loaded");
    }
    

function draw(){
    image(video, 0,0, 600,500);
    fill("#FF0000");
    stroke("#000000");
    circle(left_x, left_y, 20);
    if(left_y <= 100 && left_y > 0){
    document.getElementById('pete_an').innerHTML = "Peter Pan = Loading";
    }
  fill("#FF0000");
  stroke("#000000");
  circle(right_x, right_y, 20);
  if(right_y <= 100 && right_y > 0){
      document.getElementById('harr_otter').innerHTML = "Harry Potter = Loading";
        song_1.rate(1);
        song_2.rate(1);
}}



function start(){
   
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > [0]){
        console.log(results);
        left_x = results[0].pose.leftWrist.x;
        left_y = results[0].pose.leftWrist.y;
        console.log(left_x, left_y);

        right_x = results[0].pose.rightWrist.x;
        right_y = results[0].pose.rightWrist.y;
        console.log(right_x, right_y);   
    }}
noseX=0;
noseY=0;

function preload()
{
clown_nose=loadImage("https://i.postimg.cc/y88v9BzW/5006041-clown-nose-png-101-images-in-collection-page-2-clown-nose-png-640-480-preview.png");
}

function setup()
{
    canvas=createCanvas(200,200);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
image(video,  0, 0, 200, 200);
}

function take_snapshot()
{
    save('myFilter.png');
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x="+noseX);
        console.log("nose y="+noseY);
        
    }
}
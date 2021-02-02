var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surf1=createSprite(0,580,220,30);
    surf1.shapeColor="blue";
    surf2=createSprite(250,580,220,30);
    surf2.shapeColor="green";
    surf3=createSprite(500,580,220,30);
    surf3.shapeColor="red";
    surf4=createSprite(740,580,220,30);
    surf4.shapeColor="yellow";



    //create box sprite and give velocity

    ball=createSprite(random(20,750),50,50,50);
    ball.shapeColor="white";
    ball.velocityX=-3;
    ball.velocityY=4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

edges=createEdgeSprites();
ball.bounceOff(edges);



    //add condition to check if box touching surface and make it box
    if(ball.isTouching(surf1)&&ball.bounceOff(surf1)){
        ball.shapeColor="blue";
    }
    if(ball.isTouching(surf2)&&ball.bounceOff(surf2)){
        ball.shapeColor="green";
    }
    if(ball.isTouching(surf3)&&ball.bounceOff(surf3)){
        ball.shapeColor="red";
        music.play();
    }
    if(ball.isTouching(surf4)&&ball.bounceOff(surf4)){
        ball.shapeColor="yellow";
        ball.velocityX=0;
        ball.velocityY=0;
    }

    drawSprites();
}

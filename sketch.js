
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanImg=loadImage("images/iron.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  ironman=createSprite(150,50);
  ironman.addImage(ironmanImg);
  ironman.scale=0.5;
  ground=createSprite(200,585,400,10);
  ground.visible=false;


 
}

function draw() {
  if(keyDown("space") ) {
    ironman.velocityY = -16;
    
  }

  ironman.velocityY = ironman.velocityY + 0.5;
  
  ironman.collide(ground);
    
    drawSprites();
   
}


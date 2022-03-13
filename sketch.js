var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacle






function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png");
  cloudImage =loadImage("cloud.png")
  obstacleImage1 =loadImage("obstacle1.png")
  obstacleImage2 =loadImage("obstacle2.png")
  obstacleImage3 =loadImage("obstacle3.png")
  obstacleImage4 =loadImage("obstacle4.png")
  obstacleImage5 =loadImage("obstacle5.png")
  obstacleImage6 =loadImage("obstacle6.png")
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //set background color
  background(1 );
  
  //random
  
  var ran= Math.round(random(10,100))
  console.log(ran)

  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  spawnCloud();
  drawSprites();
  spawnObstacle();
}
function spawnCloud(){
  if(frameCount % 60===0){


    cloud=createSprite(600,100,40,10)
    cloud.addImage(cloudImage);
    cloud.velocityX=-4
cloud.y=Math.round(random(10,100))
cloud.depth=trex.depth
trex.depth=trex.depth+1

//lifetime//
cloud.lifetime=160
  }
  }
 function spawnObstacle(){
   if(frameCount % 60===0){


    obstacle=createSprite(600,165,10,40)
    //obstacle.addImage(obstacleImage1);
    obstacle.velocityX=-4
   var ran=Math.round(random(1,6))
   switch(ran){
  case 1:obstacle.addImage(obstacleImage1)
  break;
  
  case 2:obstacle.addImage(obstacleImage2)
  break;

  case 3:obstacle.addImage(obstacleImage3)
  break;

  case 4:obstacle.addImage(obstacleImage4)
  break;
  
  case 5:obstacle.addImage(obstacleImage5)
  break;

  case 6:obstacle.addImage(obstacleImage6)
  break;

default:
  break;
  }

obstacle.scale=0.7

//lifetime//
obstacle.lifetime=160   

   }
  }



var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup; 
var ghost, ghostImg;
var gameState = "play"
var invilineGroup
function preload()
{ towerImg = loadImage("tower.png");
 doorImg = loadImage("door.png");
 climberImg = loadImage("climber.png");
 ghostImg = loadImage("ghost-standing.png");
 spookySound = loadSound("spooky.wav"); }

function setup()
{ createCanvas(600,600);
 tower = createSprite(300,300); 
 tower.addImage("tower",towerImg); 
 tower.velocityY = 1;
 ghost = createSprite(200,200,50,50);
 ghost.scale = 0.3; 
 ghost.addImage("ghost", ghostImg);
doorsGroup = new Group();
 climbersGroup = new Group(); 
 invilineGroup = new Group();
}
function draw()
{ background(0);
 if(gameState==="play"){
 if(keyDown("left_arrow"))
 {
   ghost.x = ghost.x - 3;
 } 
 if(keyDown("right_arrow"))
 { 
   ghost.x = ghost.x + 3; 
} 
 if(keyDown("space")){ 
   ghost.velocityY = -10; 
 } 
 ghost.velocityY = ghost.velocityY + 0.8 
 if(tower.y > 400)
 { 
   tower.y = 300
 }
  doors()  
  if(ghost.isTouching(invilineGroup)||ghost.y>600) {
    gameState="end"
    ghost.destroy()
    tower.destroy()
    doorsGroup.destroyEach()
     climbersGroup.destroyEach()
     invilineGroup.destroyEach()
  }
   if(climbersGroup.isTouching(ghost)){ 
     ghost.velocityY = 0; }
 }
 if (gameState === "end"){
   fill("yellow"); 
   textSize(30);
   text("Game Over", 230,250) }
drawSprites()
}
function doors(){
  
  if (frameCount % 200 === 0) { 
    var door = createSprite(200, 50);
    door.addImage(doorImg);
    door.velocityY = 1;
door.x=Math.round(random(120,400))
   var climber = createSprite(200, 100 );
    climber.addImage(climberImg);
    climber.velocityY = 1;
climber.x=door.x
inviline=createSprite(200,110 ,climber.width,2)  
inviline.debug=true
 inviline.x=climber.x
 inviline.velocityY=1  
 door.lifetime=600   
  climber.lifetime=600   
    inviline.lifetime=600 
    doorsGroup.add(door);
    climbersGroup.add(climber); 
    invilineGroup.add(inviline); 
}
}
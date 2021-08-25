var sea
var ship
function preload(){
shipMoving.loadAnimation(ship1.png, ship3.png, ship2.png, ship4.png);
seaMoving.loadImage(sea.png);
}

function setup(){
  createCanvas(400,400);

  //making sea
  sea.createSprite(0,300, 0, 400);
  sea.addImage("movingsea", seaMoving);

  //making Ship
ship.createSprite(200,200, 20,20);
ship.addAnimation("movingShip", shipMoving)




}

function draw() {
  background("blue");
 sea.velocityX = 2;
 
 drawSprites();
}

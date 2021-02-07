var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2, boundary3,boundary4, boundary5, boundary6, boundary7, boundary8, boundary9, boundary10, boundary1, boundary12;
var sam;
function setup() {
createCanvas(400, 400);
boundary1 = createSprite(190,120,250,3);
boundary2 = createSprite(190,260,250,3);
boundary3 = createSprite(67,145,3,50);
boundary4 = createSprite(67,235,3,50);
boundary5 = createSprite(313,145,3,50);
boundary6 = createSprite(313,235,3,50);
boundary7 = createSprite(41,170,50,3);
boundary8 = createSprite(41,210,50,3);
boundary9 = createSprite(337,210,50,3);
boundary10 = createSprite(337,170,50,3);
boundary11 = createSprite(18,190,3,40);
boundary12 = createSprite(361,190,3,40);
sam = createSprite(40,190,13,13);
sam.shapeColor="green";
car1 = createSprite(100,130,10,10);
car1.shapeColor = "red";
car2 = createSprite(215,130,10,10);
car2.shapeColor = "red";
car3 = createSprite(165,250,10,10);
car3.shapeColor = "red";
car4 = createSprite(270,250,10,10);
car4.shapeColor = "red";
  car1.velocityY = 8;
  car2.velocityY = 8;
  car3.velocityY = -8;
  car4.velocityY = -8;
}
function draw() {
  background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(18,170,52,40);
  fill("yellow");
  rect(308,170,52,40);
car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
if(keyDown("right")){
    sam.x = sam.x + 2;
  }
  if(keyDown("left")){
    sam.x = sam.x - 2;  
  }
  if(sam.isTouching(boundary11)||
     sam.isTouching(boundary12)||
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 40;
     sam.y = 190;
     life = life + 1;
  }
drawSprites();
}
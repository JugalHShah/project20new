var car;
var wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed=random(50,90)
  weigt=random(400,1500)

  wall =createSprite(1500,200,60,height/2);
  wall.shapeColor="80,80,80";

  car=createSprite(50,200,50,60);
  car.velocityX=speed;

  deformation=(speed*speed*weigt*0.5)/22500;

  if((car.x-wall.x<car.width/2+wall.width/2)&&deformation<100){
    car.shapeColor="0,255,0";
  }

  if((car.x-wall.x<car.width/2+wall.width/2)&&deformation>=100 
   &&deformation<=180){
    car.shapeColor="230,230,0";
  }

  if((car.x-wall.x.width/2+wall.width/2)&&deformation>180){
    car.shapeColor="250,0,0";
  }
}

function draw() {
 
 background(255,255,255); 
 // console.log (car.x) 
 
  drawSprites();
}
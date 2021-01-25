const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fairy, fairyImg, fairyVoice;
var star, starBody, starImg;
var bg, bgImg;

function preload()
{
   bgImg=loadImage("images/starNight.png");  
   fairyImg=loadImage("images/fairy1.png","images/fairy2.png");
   fairyVoice=loadSound("sound/JoyMusic.mp3");
   starImg=loadImage("images/star.png");
}

function setup() {
  createCanvas(800, 750);

  fairyVoice.play();

  fairy = createSprite(130,520,100,10);
  fairy.addAnimation("fairy_flying",fairyImg);
  fairy.scale = 0.15;

  star = createSprite(650,30,50,50);
  star.addImage(starImg);
  star.scale = 0.15;

  engine = Engine.create();
  world = engine.world;

  starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
  World.add(world, starBody);
  
  Engine.run(engine);
}

function draw() {
  background(bgImg);

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(star.y>470 && starBody.position.y>470){
    Matter.Body.setStatic(starBody,true);
  }

  keyPressed();
  drawSprites();
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    fairy.x = fairy.x - 20;
  }
  if (keyCode === RIGHT_ARROW){
    fairy.x = fairy.x + 20;
  }
  if (keyCode === DOWN_ARROW){
    Matter.Body.setStatic(starBody,false);
  }
}
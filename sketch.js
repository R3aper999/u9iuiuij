
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var main,mainImg;
var back1, back2, back3, back4;
var x1=0,x2;
var scrollSpeed = 10;
var Mp3;
var skeloton;


function preload()
{
	mainImg= loadAnimation("images/landing.png", "images/landing2.png","images/landing3.png")
	mainImg_collided = loadAnimation("death.png","death2.png","death3.png");
	back1 = loadImage("images/houses.png");
	back2 = loadImage("images/image (2).png");
    
	back3 = loadImage("images/postapocalypse3.png");
	back4 = loadImage("images/postapocalypse4.png");

	back5 = loadImage("images/Parallax.png")
    backflip= loadImage("images/222.png");
    Mp3 = loadSound("Sounds/spider-eyes-kevin-macleod-main-version-03-34-8439.mp3")
    skeloton = loadImage("images/skeloton.png");

	fireball= loadImage("images/fire.png")

	 = loadAnimation("trex_collided.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Text("Game Over",350,30)

	Engine.run(engine);

	main= createSprite(50, height-200)
	main.addAnimation("landing",mainImg);

	x2 = width;
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

 

  image(back1,x1,0,width,height)
  image(backflip,x2,0,width,height)

  x1 -=scrollSpeed;
  x2 -=scrollSpeed;

  if(x1<= -width){
    x1 = width;
}

if(x2<=-width){
    x2=width;
}

//Mp3.loop();


if(keyDown("d")){
	main.x += 5
}
if(keyDown("a")){
	main.x -= 5
}
if(keyDown("s")){
	main.y += 5
}
if(keyDown("w")){
	main.y -= 5
}

spawnObstacles()
  drawSprites();
 
}


function spawnObstacles(){

	if(frameCount%200 === 0){
    obstacle1 = createSprite(width,Math.round(random
		(100, height-100)));
	obstacle1.velocityX = -5;
	obstacle1.addImage(skeloton);
obstacle1.scale = 0.5;
//obstacle1.rotationSpeed =5;
	}

	if(frameCount%270 ===0){
		fire = createSprite(Math.round(random(200,width)),50);
		fire.velocityX= Math.round(random(-5,-10));
		fire.velocityY = Math.round(random(5,10));
		fire.addImage(fireball);
		fire.scale = 0.5
		fire.rotationSpeed = 5;
	}
}


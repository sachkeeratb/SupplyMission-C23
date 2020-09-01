var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	rectLeft = createSprite(300, 645, 20, 100);
	rectLeft.shapeColor = ("red");

	rectMid = createSprite(400, 645, 200, 20);
	rectMid.shapeColor = ("red");

	rectRight = createSprite(500, 645, 20, 100);
	rectRight.shapeColor = ("red");

	rectLeftBody = Bodies.rectangle(300, 645, 20, 100 , {restitution:0, isStatic:false} );
	World.add(world, rectLeftBody);

	rectMidBody = Bodies.rectangle(400, 645, 200, 20 , {restitution:0, isStatic:false} );
	World.add(world, rectMidBody);

	rectRightBody = Bodies.rectangle(500, 645, 20, 100 , {restitution:0, isStatic:false} );
	World.add(world, rectRightBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  rectMid.x = rectMidBody.position.x;
  rectMid.y = rectMidBody.position.y;

  rectLeft.x = rectLeftBody.position.x;
  rectLeft.y = rectLeftBody.position.y;

  rectRight.x = rectRightBody.position.x;
  rectRight.y = rectRightBody.position.y;

  keyPressed();

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}




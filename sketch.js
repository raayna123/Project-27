
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2;
var bobDiameter = 20;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(400, 550, bobDiameter, "b1");
	bob2 = new Bob(440, 550, bobDiameter, "b2");
	bob3 = new Bob(480, 550, bobDiameter, "b3");
	bob4 = new Bob(360, 550, bobDiameter,"b4");
	bob5 = new Bob(320, 550, bobDiameter,"b5"); 
	roof = new Roof(400, 350, 440, 10);
	rope1 = new Rope(bob1.body, roof.body, 0);
	rope2 = new Rope(bob2.body, roof.body, 40);
	rope3 = new Rope(bob3.body, roof.body, 80);
	rope4 = new Rope(bob4.body, roof.body, -40);
	rope5 = new Rope(bob5.body, roof.body, -80);
	
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		console.log("hbxj")
		Matter.Body.applyForce(bob5.body, roof.body.position,{x:-86,y:236})
	}
}


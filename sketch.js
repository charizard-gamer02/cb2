
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paper
var ground
var bin1,bin2,bin3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,500,50,50)


ground = new Ground(400,690,800,20)


bin1 = new Bin(500,640,20,100)
bin2 = new Bin(620,670,220,20)
bin3 = new Bin(740,640,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
   
 
}
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
//keyPressed();
//function keyPressed(){
//	if(keyCode===UP_ARROW){
//	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
//}
//}

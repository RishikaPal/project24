var paperBall , basket ;
var ground ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
  createCanvas(1600, 700); 
    
    engine = Engine.create();
    world = engine.world;

    groundObject, paperObject
  
    groundObject=new ground(width/2,670,width,20);

    paperObject=new paper(200,450,40);

    Engine.run(engine);

    
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  groundObject.display();

  paperObject.display();
  
}


  keyPressed()
   {
     if (keyCode === UP_ARROW) { 
       Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 
     }
  }




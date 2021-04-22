var basket, paperObject;
var  groundObject

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
  createCanvas(1600, 700); 
    
    engine = Engine.create();
    world = engine.world;

      groundObject=new ground(width/2,670,width,20);

    paperObject=new paper(200,450,40);

    Engine.run(engine);

    basket=new dustbin(1200,650);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  groundObject.display();

  paperObject.display();

  basket.display();
  
}


 function keyPressed()
   {
     if (keyCode === UP_ARROW) { 
       Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 
     }
  }




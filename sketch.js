var paperBall , basket ;
var ground ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
    createCanvas(800, 700);
    
    engine = Engine.create();
    world = engine.world;

    basket = createSprite(50,50,10,10);

    Matter.Bodies.circle(x,y,radius,[options],[maxSide])
  
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

function keyPressed(){
  if (keyCode === Up_Arrow) {

    Matter.Body.applyForce(paperBall.body.position,{x:85,y:-85});
    
  }

}




var paperBall , basket ;
var ground ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    var options = {
      isStatic : false,
      restution : 0.3,
      friction : 0.5,
      density : 1.2
    }
}

function setup() {
    createCanvas(800, 700);
    
    engine = Engine.create();
    world = engine.world;

    basket = createSprite(50,50,10,10);

    Matter.Bodies.circle(x,y,radius,[options],[maxSide])
  
    Engine.run(engine);
  
}

boxPosition=width/2-100 ;
    box.Y=610;
    boxleftSprite=createSprite(boxPosition, boxY, 20,100);
    boxleftSprite.shapeColor=color(255,0,0);
    boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
     World.add(world, boxLeftBody);
     boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
     boxBase.shapeColor=color(255,0,0);
     boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
     World.add(world, boxBottomBody);
     boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
     boxleftSprite.shapeColor=color(255,0,0);
     boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
     World.add(world, boxRightBody);

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === Up_Arrow) {

    Matter.Body.applyForce(paperBall.body.position,{x:85,y:-85});
    
  }

}




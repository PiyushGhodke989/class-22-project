const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var ball;
var engine,world,object;

function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var options={
  isStatic:true
}
object=Bodies.rectangle(200,390,400,20,options);
World.add(world,object);
var ballOptions={
  restitution:1.0
}
ball=Bodies.circle(100,100,20,ballOptions);
World.add(world,ball);
console.log(object);
}


function draw() {
  background(0); 
  Engine.update(engine);
  drawSprites();
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20)

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}

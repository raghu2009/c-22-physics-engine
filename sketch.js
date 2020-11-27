const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world
var pin
var ground
var groundOptions
var ball
var ballOptions

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  pin=Bodies.rectangle(300,300,40,40);
  World.add(world,pin)
  console.log(pin)
groundOptions={
  isStatic:true
}
  ground=Bodies.rectangle(200,390,400,20,groundOptions);
  World.add(world,ground)

  ballOptions={
    restitution:1.6
  }
  ball=Bodies.circle(100,200,20,ballOptions);
  World.add(world,ball);

}

function draw() {
  background("black");
  Engine.update(engine) 
  rectMode(CENTER) 
  
  rect(pin.position.x,pin.position.y,40,40)
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground,ball;
var engine,world;

function setup() {
  createCanvas(400,400);

  //Engine creation
  engine = Engine.create();
  //Initializing world
  world = engine.world;
  var ground_options ={ isStatic: true };
  ground = Bodies.rectangle(200,390,10,400,ground_options);

  World.add(world,ground);

  var ball_options = { 
    restitution: 1.0 
  }
  ball = Bodies.circle(200,200,20,ball_options);

  World.add(world,ball);

  console.log(ball);
}

function draw() {
  background("black");
  
  Engine.update(engine);
  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  
  drawSprites();
}
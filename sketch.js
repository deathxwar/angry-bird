const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig,log,box2,box3,box4,pig2,log2,box5,log3,log4,bird;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,550,70,70);
    box2 = new Box(900,550,70,70);
    box3 = new Box(900,450,70,70);
    box4 = new Box(700,450,70,70);
    box5 = new Box(800,350,70,70);
    bird = new Bird(200,200);
    pig = new Pig(800,550);
    log = new Log(800,500,270,PI/2);
    pig2 = new Pig(800,450);
    log2 = new Log(800,400,270,PI/2);
    log3 = new Log(750,300,130,PI/4);
    log4 = new Log(860,300,130,-PI/4);
    ground = new Ground(500,height,1000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig.display();
    pig2.display();
    log2.display();
    log.display();
    log3.display();
    log4.display();
    ground.display();
    bird.display();
}
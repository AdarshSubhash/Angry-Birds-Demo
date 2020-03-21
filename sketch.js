const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var pig1;
var log1;
var bird;

function setup(){
    var canvas = createCanvas(1330,650);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,600,50,50);
    box2=new Box(1200,600,50,50);
    box3=new Box(1000,500,50,50);
    box4=new Box(1200,500,50,50);
    ground=new Ground(665,640,1330,10);
    pig1=new Pigs(1100,600);
    log1=new Log(1100,540,250,PI/2);
    pig2=new Pigs(1100,500);
    log2=new Log(1100,440,250,PI/2);
    box5=new Box(1100,400,50,50);
    log3=new Log(1050,400,125,PI/7);
    log4=new Log(1150,400,125,-PI/7);
    bird=new Birds(200,20);

    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}
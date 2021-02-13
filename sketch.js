const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box19,box20,ball1;
var sling;

function setup(){
    var canvas = createCanvas(1200,660);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(600,300,70,70);
    box2 = new Box(600,370,70,70);
   box3= new Box(600,440,70,70);

    box4 = new Box(600,510,70,70);
    box5 = new Box(600,580,70,70);
    box6 = new Box(600,230,70,70);
    box7 = new Box(600,160,70,70);
    box8 = new Box(600,90,70,70);
    box9 = new Box(700,230,70,70);
    box10 = new Box(700,300,70,70);
    box11 = new Box(700,370,70,70);
    box12 = new Box(700,440,70,70);
    box13 = new Box(700,510,70,70);
    box14 = new Box(700,580,70,70);
    box15 = new Box(800,230,70,70);
    box16 = new Box(800,300,70,70);
    box17 = new Box(800,370,70,70);
    box18 = new Box(800,440,70,70);
    box19 = new Box(800,510,70,70);
    box20 = new Box(800,580,70,70);
   ball1=new Ball();
sling=new SlingShot(ball1.body,{x:400,y:50});
    

    //box6 = new Box(810,160,70,70);
   

    

    //log6 = new Log(230,180,80, PI/2);
}

function draw(){
   background("lightpink");
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   sling.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box19.display();
   box20.display();
   box18.display();

    box3.display();
    box4.display();
   box6.display();

    box5.display();
   ball1.display();
    
    
       
}

function mouseDragged(){
   
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    }






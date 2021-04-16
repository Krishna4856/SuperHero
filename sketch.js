const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8;
var hero,monster,rope,ground;
var box9,box10,box11,box12;
var bot1,bot2,bot3,bot4,bot5,bot6,bot7,bot8,bot9,bot10,bot11,bot12;
var box13,box14,box15,bot13,bot14;
var backgroundImg,bg;
function preload() {
 getBackgroundImg();
  // bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 900);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 100, 70, 70);
  box3 = new Box(600, 100, 70, 70);
  box4 = new Box(600, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(900, 100, 70, 70);
  box9 = new Box(900, 100, 70, 70);
  box10 = new Box(900, 100, 70, 70);
  box11 = new Box(900, 100, 70, 70);
  box12= new Box(900, 100, 70, 70);
  box13 = new Box(900, 100, 70, 70);
  box14 = new Box(900, 100, 70, 70);
  box15= new Box(900, 100, 70, 70);
  bot1 = new Box(700, 100, 70, 70);
  bot2 = new Box(700, 100, 70, 70);
  bot3 = new Box(700, 100, 70, 70);
  bot4 = new Box(700, 100, 70, 70);
  bot5 = new Box(700, 100, 70, 70);
  bot6 = new Box(700, 100, 70, 70);
  bot7 = new Box(700, 100, 70, 70);
  bot8 = new Box(700, 100, 70, 70);
  bot9 = new Box(800, 100, 70, 70);
  bot10 = new Box(800, 100, 70, 70);
  bot11 = new Box(800, 100, 70, 70);
  bot12= new Box(800, 100, 70, 70);
  bot13 = new Box(800, 100, 70, 70);
  bot14= new Box(800, 100, 70, 70);

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  bot1.display();
  bot2.display();
  bot3.display();
  bot4.display();
  bot5.display();
  bot6.display();
  bot7.display();
  bot8.display();
  bot9.display();
  bot10.display();
  bot11.display();
  bot12.display();
  bot13.display();
  bot14.display();

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
async function getBackgroundImg(){
var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
var responseJSON=await response.json();
var datetime=responseJSON.datetime;
var hour=datetime.slice(11,13);
if(hour>=06&&hour<=19){
  bg="gamingbackground1.jpg"
}else{
  bg="gamingbackground2.png"
}
backgroundImg=loadImage(bg);
console.log(backgroundImg);
}

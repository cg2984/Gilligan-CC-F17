var i = 10; //GLOBAL VARIABLE should be before the setup if you want to use it everywhere. LOCAL VARIABLE if you make it in a function, it cant be used elsewhere
var iVel = 3;
var j = 20; 
var jVel = 5; 
var boing;


function preload(){
  boing = loadSound("assets/Boing.mp3");
}

function setup(){
	createCanvas(600,600);
  background(150,30,150);
  fill(0);
  ellipse(300,300, 50,50);
  createCanvas(500,500);
  fill(255);
  ellipse(250,250,50,50);
}

function draw(){
  stroke(13,170,162);
  background(255,198,119);
  fill(59,240,249);
   i+=iVel;
   j +=jVel; 
  if (i > width || i < 0){
   iVel = iVel *-1
     }
  else {
    console.log("i isnt working")
  }
 
  if (j > height || j < 0){
    jVel = jVel * -1
  }
  else {
    console.log("j isnt working")
  }

  if (i > width || i < 0 || j > height || j < 0){
    boing.play();
    console.log("boing");
  }
  else {
    console.log ("in transit");
  }

  ellipse(i,j,50,50);
}

function mousePressed(){
  boing.play();
}

function keyPressed(){
  boing.stop();
}

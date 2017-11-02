//end constructor or class with a semicolon after bracket
//class need to have both parts caitalized (ex): MyClass
var myShape;
var myShape2;
var myShape3;
var myShape4;
var myShape5;
var sound;

function preload(){
  sound = loadSound("assets/Boing.mp3");
}

function setup(){
	createCanvas(600,600);
	background(200);
  //this is creating a new instance of an object that was outlined in the class
  //dont create object in the draw function, will reset too much, leave it in setup
  myShape = new Shape(54, 120, 5,2, 20, color(255,10,200));
  myShape2 = new Shape(10,10,3,6,40,color(80,70,1));
  myShape3 = new Shape(60,10,2,4,8,color(155,3,100));
  myShape4 = new Shape(70,300,4,2,10,color(30,100,255));
}

function draw(){
  //calling the display function on the object that we have built
  //you can call fuunctions onto objects in draw 

  background(0,0,0,30);
  myShape.display();
  myShape.move();
  myShape2.display();
  myShape2.move();
  myShape3.display();
  myShape3.move(); 
  myShape4.display();
  myShape4.move(); 
}



//this notation is used to work with the properties of each unique object 
//it says that this is only applicaple to this specific class
//replaces var
//makes them global to that class 
//can make it equal a function
//cant rrefer to a class specifically, must create an object with the class to call it (ex): Shape is an object created by the MyShape class
//using a _ is a common convention when passing in things for the class 
function Shape(_x,_y,_xV,_yV,_s,_c){
  this.x = _x;
  this.y = _y;
  this.xVel = _xV;
  this.yVel = _yV; 
  this.size = _s;
  this.color = _c

  this.move = function(){
    this.x = this.x + this.xVel;
    this.y = this.y + this.yVel;
    if(this.x < 0 || this.x > width){
      this.xVel *= -1;
      console.log("bounce");
      sound.play();
    }
    else if (this.y < 0 || this.y > height){
      this.yVel *= -1;
      console.log("bounce")
      sound.play();
    }
    else(console.log("bouncing"))
  }
  this.display = function(){
    noStroke();
    fill(this.color)
    ellipse(this.x, this.y, this.size, this.size);
  }
};


    
var i; 
var j;
var state;
var tNum;
var sNum;
var mNum;
var c;
var d; 
var sky;
var mSpc;
var yNum;
var gCol; 
var xLen;
var yLen; 
var aCol = color(255);
var gCol = color(255);
var vCol = color(255);
var fCol = color(255);
var lCol

function setup(){
  createCanvas(800,600);
  background(159,241,253);
  fill(0,255,0);
  noStroke();
  state = 0; 
}

function draw(){
seasons(mouseX);
fill(sky);
rect(0,0,800,600);
fill(d);
rect(0,300,800,500);
//year 1
  if (state == 0){ 
    air();
    gPlant();
    trees(4,200);
    house(20,10,15);
    fill(0);
    rect(400,250, 20,40);
    rect(500,250, 20,40);
    console.log("state1");
  }
//year 5 
  else if (state == 1){
    air();
    gPlant();
    trees(4,200);
    push()
      translate(70,30);
      trees(4,200);
    pop();
    house(20,15,15);
    fill(0);
    rect(400,250, 20,40);
    rect(500,250, 20,40);
    console.log("state 2");  
  }
//year 10
  else if (state == 2){
    air();
    gPlant();
    trees(4,200);
    push()
      translate(70,30);
      trees(4,200);
    pop();
    house(30,25,10);
    fill(0);
    rect(400,250, 20,40);
    rect(500,250, 20,40);
    push();
      translate(40,200);
      trees(4,250);
      console.log("you have pushed/popped year 10")
    pop();
    console.log("state3");
  }
//year 20
  else if (state == 3){
    air();
    gPlant();
    trees(4,200);
    push()
      translate(70,30);
      trees(4,200);
    pop();
    house(30,25,10);
    //windows
    fill(0);
    rect(400,250, 20,40);
    rect(500,250, 20,40);
    fill(0);
    //broken
    rect(420,160,30,10);
    rect(450,180,40,10);  
    push();
      translate(40,200);
      trees(4,250);
      console.log("you have pushed/popped year 20")
    pop();
    //triangle(300,200, 425,150, 600,200);
    console.log("state 4");
  }
  //final frame
  else if (state == 4) {
    vCol = color(255,255,255,0);
    lCol = color(255,255,255,0);
    c = color(0,100,0);
    background(153,255,255);
    fill(0,50,0);
    rect(0,300, 800,500);
    trees(4,200);
    push()
      translate(70,30);
      trees(4,200);
    pop();
    house(30,25,10);
    //window
    fill(255,255,102);
    rect(400,250, 20,40);
    rect(500,250, 20,40);
    push();
      translate(40,200);
      trees(4,250);
      console.log("you have pushed/popped year 20")
    pop();

  }
}
  
function mousePressed(){
  if(state < 4){
    state++;
  }
  else {
   state = 0;
  }
}


function house(xNum, yNum, mSpc){
  noStroke();
  fill(92,49,41);
  triangle(300,200, 425,150, 600,200);
  rect(300,200,300,250);
  stroke(26,23,2);
  strokeWeight(3);
  fill(92,49,41);
  rect(450,325,50,125);
  noStroke();
  fill(200);
  rect(475,350,4,4);
  
  for(var g = 0; g < xNum; g++){
    for(var r = 0; r < yNum; r++){
      fill(lCol);
      rect((g*mSpc)+300,(r*mSpc)+200, 6,6);
    }
    fill(vCol);
    rect((g*mSpc)+305,200, 5, 250);
  }
}


function trees(tNum,sNum){
  var r = random(70, 71, 72, 73);
  var move = map(mouseX, 0, 800, 1, 10)
  constrain(move, 0,600);
  for(i = 0; i < tNum; i++){
    noStroke();
    fill(50, 50, 50);
    rect((i*sNum), 0, 50, 400);
    for( var v = 0; v < 5; v++){
      fill(50,50,50);
      rect(((i*sNum)-30), (v*70), 125, 5);
      fill(c);
      rect(((i*sNum)-30)+move,(v*60), 120, 50);
    }
  }
}


function seasons(sChange){
  //summer
  if(sChange < 200){
    c = color(25,57,3);
    d = color(49,182,9);
    //fill(25,57,3);
    //rect(0,300,800,500)
    sky = color(69,224,247);
    aCol = color(255,255,255,0);
    gCol = color(210,90,0,0); 
    lCol = color(25,100,3);
    vCol = color(3,30,7);
  }
  
  //fall
  else if(sChange < 400 && sChange > 200){

    c = color(200,100,0);
    d = color(204,204,102);
    //fill(200,150,0);
    //rect(0,300, 800, 500);
    sky = color(51,153,255);
    aCol = color(210,90,0,0);
    gCol = color(210,90,0);
    lCol = color(200,100,0);
    vCol = color(3,30,7);
  }
  //winter
  else if(sChange < 600 && sChange > 400){
    c = color(255,255,255,0);
    d = color(223,243, 208); 
    sky = color(200, 238,255);
    aCol = color(255);
    gCol = color(255,255,255,0);
    lCol = color(255,255,255,0);
    vCol = color(3,30,7);
  }
  //spring
  else if(sChange < 800 && sChange > 600){
    c = color(25,100,3);
    d = color(95,182,69);
    sky = color(131,231,256);
    aCol = color(255,255,255,0);
    gCol = color(255,153,153);
    lCol = color(25,100,3);
    vCol = color(3,30,7);
  }
}

function air(){
  fill(aCol);
  for(var p = 0; p < 50; p++){
    rect(random(0,800),random(0,600), 5,5);
  }
}

function gPlant(){
  fill(gCol);
  for (var f = 0; f < 80; f++){
    for( var o = 0; o < 80; o++){
      rect(f*10,(o*10)+300, 3,4);
    }
  }
}



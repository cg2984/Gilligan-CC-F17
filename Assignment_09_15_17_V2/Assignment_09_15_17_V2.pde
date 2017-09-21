//thickness
int siz = 10;
//line color
int col = 0;
int col2 = 0;
int col3 = 0;
// x center of circle 
int circX = 50;
// y center of circle
int circY = 50; 
// cricle radius
int circR = 20; 
//distance between circles 
int circDis = (circR*2);
void setup(){
  background(255);
  size (1000,600);
  frameRate(70);
  noStroke();
// 30 second timer 
  fill(200);
  noStroke();
  rect((circX-(circR/2)),(11*circDis),100,25);
  fill(0);
  textSize(15);
  text("30s Timer",((circX+3)-(circR/2)),(11*circDis),100,25);
//clear canvas
  fill(200);
  noStroke();
  rect((circX-(circR/2)),(10*circDis),100,25);
  fill(0);
  textSize(15);
  text("Clear Canvas",((circX+3)-(circR/2)),(10*circDis),100,25);
//black 
  fill(0,0,0);
  ellipse(circX,circY, circR,circR);
//grey
  fill(200,200,200);
  ellipse(circX,(circY+circDis), circR,circR);
//red
  fill(255,0,0);
  ellipse(circX,(circY+(2*circDis)), circR,circR);
//blue
  fill(0,0,255);
  ellipse(circX,(circY+(3*circDis)), circR,circR);
//yellow
  fill(255,247,5);
  ellipse(circX,(circY+(4*circDis)), circR,circR);
//green
  fill(0,255,0);
  ellipse(circX,(circY+(5*circDis)), circR,circR);
//purple
  fill(255,0,255); 
  ellipse(circX,(circY+(6*circDis)), circR,circR);
//orange
  fill(255,147,5); 
  ellipse(circX,(circY+(7*circDis)), circR,circR);
//white
  stroke(0);
  fill(255,255,255); 
  ellipse(circX,(circY+(8*circDis)), circR,circR);
//large
  fill(0);
  ellipse((circX+900),circY, 50,50); 
//meduim
  ellipse((circX + 900),(circY+100), 30,30); 
//small
  ellipse((circX + 900),(circY+200), 20,20);
}

void draw(){
//black
 if (mousePressed && dist(mouseX,mouseY, circX,circY) < circR){
   col = 0;
   col2 = 0;
   col3 = 0;
   println("Clicked");}
//grey
   else if (mousePressed && dist(mouseX,mouseY, circX,(circY+circDis)) < circR){
   col = 200;
   col2 = 200;
   col3 = 200;
   println("Clicked the grey one");}
//red   
   else if (mousePressed && dist(mouseX,mouseY, circX,(circY+(2*circDis))) < circR){
   col = 255;
   col2 = 0;
   col3 = 0;
   println("Clicked the red one");
  }
//blue 
  else if (mousePressed && dist(mouseX,mouseY, circX,(circY + (3*circDis))) < circR){
  col = 0;
  col2 = 0;
  col3 = 255;
  println("Clicked the blue one");
  }
//yellow 
  else if (mousePressed && dist(mouseX,mouseY, circX,(circY + (4*circDis))) < circR){
  col = 255;
  col2 = 247;
  col3 = 5;
  println("Clicked the yellow one");
  }
//green 
  else if (mousePressed && dist(mouseX,mouseY, circX,(circY + (5*circDis))) < circR){
  col = 0;
  col2 = 255;
  col3 = 0;
  println("Clicked the green one");
  }
//purple
  else if (mousePressed && dist(mouseX,mouseY, circX,(circY + (6*circDis))) < circR){
  col = 255;
  col2 = 0;
  col3 = 255;
  println("Clicked the purple one");
  }
//orange 
  else if (mousePressed && dist(mouseX,mouseY, circX,(circY + (7*circDis))) < circR){
  col = 255;
  col2 = 147;
  col3 = 5;
  println("Clicked the orange one");
  }
//white
  else if (mousePressed && dist(mouseX,mouseY, circX,(circY + (8*circDis))) < circR){
  col = 255;
  col2 = 255;
  col3 = 255;
  println("Clicked the white one");
  }
//large
  else if (mousePressed && dist(mouseX,mouseY, (circX + 900),circY) < circR){
  siz = 20;
  println("large");}
//meduim
  else if (mousePressed && dist(mouseX,mouseY, (circX + 900),(circY+100)) < 30){
  siz = 10;
  println("meduim");}
//small
  else if (mousePressed && dist(mouseX,mouseY, (circX + 900),(circY+200)) < 20){
  siz = 5;
  println("small");}
//Clear Canvas
  if (mousePressed && mouseX > (circX-(circR/2)) && mouseX < ((circX-(circR/2))+100) && mouseY > (10*circDis) && mouseY < ((10*circDis)+25)){
    noStroke();
    fill(255);
    rect(150,0, 750,600);
    println("you have cleared the canvas");}  
    
//30 second timer 
int sec = second();
int sec2 = sec + 1; 
if (mousePressed && mouseX > (circX-(circR/2)) && mouseX < ((circX-(circR/2))+100) && mouseY > (11*circDis) && mouseY < ((11*circDis)+25)){
  println(sec2);
  /*if ( sec == 30){
    noStroke();
    fill(255);
    rect(150,0, 750,600);
    println("you have cleared the canvas");}*/
  }
}

void mouseDragged(){
 strokeWeight(siz);
 stroke(col,col2,col3);
 line(mouseX,mouseY,pmouseX,pmouseY);
}
int col = 0;
int col2 = 0;
int col3 = 0;
int siz = 10;
int strCol = 0;
int circX = 100;
int circY = 100; 

void setup(){
  background(255);
  size(1000,1000);
  frameRate(60);
  noStroke();
//black 
  fill(0,0,0);
  ellipse(circX,circY, 50,50);
//grey
  fill(200,200,200);
  ellipse(circX,(circY+100), 50,50);
//red
  fill(255,0,0);
  ellipse(circX,(circY+200), 50,50);
//blue
  fill(0,0,255);
  ellipse(circX,(circY+300), 50,50);
//yellow
  fill(255,247,5);
  ellipse(circX,(circY+400), 50,50);
//green
  fill(0,255,0);
  ellipse(circX,(circY+500), 50,50);
//purple
  fill(255,0,255); 
  ellipse(circX,(circY+600), 50,50);
//orange
  fill(255,147,5); 
  ellipse(circX,(circY+700), 50,50);
//white
  stroke(0);
  fill(255,255,255); 
  ellipse(circX,(circY+800), 50,50);
//large
  fill(0);
  ellipse((circX+800),circY, 50,50);
//meduim
  ellipse((circX + 800),(circY+100), 30,30); 
//small
  ellipse((circX + 800),(circY+200), 15,15);
}

void draw(){
//black
 if (mousePressed && dist(mouseX,mouseY, circX,circY) < 50){
   col = 0;
   col2 = 0;
   col3 = 0;
   println("Clicked");}
//grey
   else if (mousePressed && dist(mouseX,mouseY, circX,(circY+100)) < 50){
   col = 200;
   col2 = 200;
   col3 = 200;
   println("Clicked the grey one");}
//red   
   else if (mousePressed && dist(mouseX,mouseY, circX,(circY+200)) < 50){
   col = 255;
   col2 = 0;
   col3 = 0;
   println("Clicked the red one");
  }
//blue 
  else if (mousePressed && dist(mouseX,mouseY, circX,(circY + 300)) < 50){
  col = 0;
  col2 = 0;
  col3 = 255;
  println("Clicked the blue one");
  }
//yellow 
  else if (mousePressed && dist(mouseX,mouseY, circX,(circY + 400)) < 50){
  col = 255;
  col2 = 247;
  col3 = 5;
  println("Clicked the yellow one");
  }
//green 
  else if (mousePressed && dist(mouseX,mouseY, circX,(circY + 500)) < 50){
  col = 0;
  col2 = 255;
  col3 = 0;
  println("Clicked the green one");
  }
//purple
  else if (mousePressed && dist(mouseX,mouseY, circX,(circY + 600)) < 50){
  col = 255;
  col2 = 0;
  col3 = 255;
  println("Clicked the purple one");
  }
//orange 
  else if (mousePressed && dist(mouseX,mouseY, circX,(circY + 700)) < 50){
  col = 255;
  col2 = 147;
  col3 = 5;
  println("Clicked the orange one");
  }
//white
  else if (mousePressed && dist(mouseX,mouseY, circX,(circY + 800)) < 50){
  col = 255;
  col2 = 255;
  col3 = 255;
  println("Clicked the white one");
  }
//large
  else if (mousePressed && dist(mouseX,mouseY, (circX + 800),circY) < 50){
  siz = 20;
  println("large");}
//meduim
  else if (mousePressed && dist(mouseX,mouseY, (circX + 800),(circY+100)) < 30){
  siz = 10;
  println("meduim");}
//small
  else if (mousePressed && dist(mouseX,mouseY, (circX + 800),(circY+200)) < 15){
  siz = 5;
  println("small");}

  
}

void mouseDragged(){
 noStroke();
 fill(col,col2,col3);
 ellipse(mouseX,mouseY, siz,siz);
}
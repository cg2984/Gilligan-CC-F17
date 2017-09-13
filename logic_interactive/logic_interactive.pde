void setup(){
  size(600,600);
  background(255);
  noStroke();
}

void draw(){
//red rectangle
  if(mouseX>300) {
    fill(255,0,0);
    rect(300,0, 300,600);}
  else {
    fill(255);
    rect(300,0, 300,600);}
//blue rectangle
   if (mouseX>0 && mouseX<300 && mouseY<400) {
     fill(0,0,255);
     rect(0,0, 300, 400);
   }
   else {
     fill(255);
     rect(0,0, 300, 400);
   }
//teal rectangle
   if (mouseX<300 && mouseY>400 && mousePressed){
     fill(152,247,246);
     rect(0,400, 300,200);
   }
   else {
     fill(255);
     rect(0,400, 300,200);
   }
//fill screen with yellow
   if (mouseX == 450){
     background(249,250,13);
   }
}
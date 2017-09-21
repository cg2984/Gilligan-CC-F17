function setup(){
	createCanvas(600,500);
	background(200);
  }

function draw(){
  //blue rectangle
    if (mouseX > 300 && mouseX < 600){
      noStroke();
      fill(0,0,255);
      rect(300,0, 300, 500);
      console.log("this is working for blue");
    } else {
      fill(255);
      rect(300,0, 300,500);}
  //teal rectangle
    if (mouseIsPressed && mouseX < 300 && mouseY < 200){
      noStroke();
      fill(0,150,200);
      rect(0,0, 300, 200);
      console.log("this is working for teal");
    } else {
      fill(255);
      rect(0,0, 300, 200);
      }
      
  //red rectangle
    if (mouseX < 300 && mouseX > 0 && mouseY > 200 && mouseY < 500){
      noStroke();
      fill(255,0,0);
      rect(0,200, 300,300); 
      console.log("this is working for red");
    } else {
      fill(255);
      rect(0,200,300,300);}

  //yellow background 
    if (mouseX == 500){
      noStroke();
      background(248,252,7);
      console.log("this is working for yellow");}
  }
    
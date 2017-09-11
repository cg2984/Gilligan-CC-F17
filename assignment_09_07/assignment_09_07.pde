size(500,500);
background(110,99,240);

noStroke();

//long hair
int outCurla = 120;
int inCurla = 140;
int inCurlb = 360;
int outCurlb = 380;
fill(95,69,12);
rect(90,90, 320, 200);
//curls, a=left side, b=right side
beginShape(); 
 vertex(outCurla,500);
 vertex(inCurla, 475);
 vertex(outCurla,450);
 vertex(inCurla,425);
 vertex(outCurla, 400);
 vertex(inCurla, 375);
 vertex(outCurlb, 375);
 vertex(inCurlb, 400);
 vertex(outCurlb, 425);
 vertex(inCurlb,450);
 vertex(outCurlb,475);
 vertex(inCurlb,500);
endShape(CLOSE);
  
//neck
fill(178,178,178);
rect(200,200, 100,300);

//head
fill(255,255,255);
beginShape();
  vertex(100,100);
  vertex(400,100);
  vertex(400,400);
  vertex(250,450);
  vertex(100,400);
endShape(CLOSE); 

//top of head hair
fill(95,69,12);
rect(90,90, 320, 75);

//nose and nostrils
fill(225,224,227);
rect(225,315, 50,25);
rect(210,220, 25,120);
rect(260,220, 25,120);

//glasses
noFill();
stroke(0,0,0);
strokeWeight(5);
int elipCenterA = 175;
int elipCenterB = 320;
int elipCenterC = 275;
ellipse(elipCenterA, elipCenterC, 75,60);
ellipse(elipCenterB, elipCenterC, 75,60); 
line(212,275, 282,275);

//eyes
fill(0,0,0);
rect(165,265, 20,20);
rect(310,265, 20,20);

//eyebrows
noStroke();
fill(95,69,12);
rect(115,220, 100,20);
rect(280,220, 100,20);

fill(0,0,0);
rect(235,330, 7,7);
rect(260,330, 7,7);

//mouth
stroke(0,0,0);
strokeWeight(6);
line(200,370, 300,370);

//ears
noStroke();
fill(255,255,255);
rect(80,250, 20,75);
rect(400,250, 20,75);
fill(225,224,227);
rect(90,250, 10,75);
rect(400,250, 10,75);
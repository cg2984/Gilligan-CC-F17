var i = 1;
var j = 1; 
function setup(){
  createCanvas(800, 400);
  background(0,0,255);
  strokeWeight(5);
  for (i = 0; i < 21; i ++){
//red loop
    for(j = 1; j < 8; j ++){
//orange/yellow loop
      for(var k = 8; k < 14; k ++){
//greeen/blue loop
        for(var l = 14; l < 17; l ++){
          for(var p = 17; p < 21; p++){
               rectMode(CENTER);
            noFill();
        //left square
            stroke(0,0,255);
            rect(200,200,(p*20)-10, (p*20)-10);
            stroke(0,255,0);
            rect(200,200,(l*20)-10, (l*20)-10);
            stroke(k*(255/7),k*(255/14),0);
            rect(200,200,(k*20)-10, (k*20)-10);
            stroke(j*(255/7),0,0);
            rect(200, 200,(j*20)-10,(j*20)-10);
        //right square
            stroke(0,255,0);
            rect(600,200,(l*20)-10, (l*20)-10);
            stroke(k*(255/7),k*(255/14),0);
            rect(600,200,(k*20)-10, (k*20)-10);
            stroke(j*(255/7),j*(255/20),7);
            rect(600, 200,(j*20)-10,(j*20)-10);
        //grey squares
            stroke((i*10)+70);
            rect(200, 200,(i*20),(i*20));
            stroke(255-(i*10));
            rect(600, 200,(i*20),(i*20));



              }
           
            }
          }
        }  
    }
  }


function draw(){
}





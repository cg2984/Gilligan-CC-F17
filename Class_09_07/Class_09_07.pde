int myInteger = 250;
float myFloat = 10.75;

size(500,400);
background(255,255,255); 

noStroke(); //doesnt need arguements,still needs parentheses to function
ellipse(myFloat,myFloat,30,30); //(xCenter,yCenter, xLength,yLength) 

stroke (255,0,0); //need to set color and weight to enable stroke after disabling it
strokeWeight(5);
triangle(140,160,250,270,150,260); //(x1,y1, x2,y2, x3,y3)

line(myInteger,myInteger,70,40); //(X1,Y1, X2, Y2) 

fill(120,50,100); //(red, green, blue)
rect(10,20, 50, 30); //(x,y, width, height) 


point(40,50); //(x,y)

//how to draw a complex shape
beginShape (); 
  vertex(50,100);
  vertex(300,200);
  vertex(200,300);
  vertex(100,250);
endShape(CLOSE);//write to automatically end shape, without it there will not be an outline at the last part

println("hello world");
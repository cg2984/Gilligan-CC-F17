function setup(){
	createCanvas(600,600);
	background(200);


}

function draw(){
background(200);
var turn = map(mouseY, 0, height, 0, PI*2);
for(var i = 1; i < 4; i ++){	
	push();
		translate(height/2,width/2);
		rotate(turn*i);
		rect((i*40)+25, 40, 30,30);
	pop();
	}

}
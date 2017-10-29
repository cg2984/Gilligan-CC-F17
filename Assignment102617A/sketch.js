
var mySound;
var loopMode;
var state = 0; 

function preload(){
	mySound = loadSound("assets/Boing.mp3");

}

function setup(){
	createCanvas(600,600);  
}

function draw(){
}

function mousePressed(){
	if (state == 0){
		state++;
		mySound.stop();
	}
	else if (state == 1){
		state = 0; 
		mySound.stop();
	}
	toggle();
}

function keyPressed(){
	mySound.stop();
}

function toggle(){

	if (state == 0){
		mySound.playMode("restart");
		mySound.loop(true);
		mySound.play();
 	}
	else if (state == 1){
		mySound.playMode("sustain");
		mySound.loop(true);
		mySound.play();
	}
}

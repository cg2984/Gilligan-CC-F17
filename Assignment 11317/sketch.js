//CREIDT: The sounds I used were 
//"ForestBirds.wav" by HerbertBoland on freesound.org (https://freesound.org/people/HerbertBoland/sounds/28239/) 
//"oceanwavescrushing.wav" by Luftrum on freesound.org (https://freesound.org/people/Luftrum/sounds/48412/)
//"Cuckoo & the Nightingdale Duet" by Vonora on freesound.org (https://freesound.org/people/Vonora/sounds/269570/)



//this is the wave in the middle that makes a beat
var mainWave;
var waveArray = [];
var sound1;
var sound2;
var sound3;
//var test;
function preload(){
	sound1 = loadSound("Assets/28239__herbertboland__forestbirds.wav");
	sound2 = loadSound("Assets/48412__luftrum__oceanwavescrushing.wav");
	sound3 = loadSound("Assets/269570__vonora__cuckoo-the-nightingale-duet.mp3");

}

function setup(){
	createCanvas(600,600);
	background(255,214,251);
	mainWave = new Wave(300,300,100,300);
	for (var i = 0; i < 0; i++){
		waveArray[i] = new Wave(500+(i*20),500,50,100);
	
	}

}

function draw(){
	background(219,255,251,30);
	for (var i = 0; i < waveArray.length; i++){
		waveArray[i].display();
		waveArray[i].move();
		waveArray[i].sound();
	}
	mainWave.display();
	mainWave.move();
	mainWave.sound();
}

function mouseClicked(){
	
	var newWave = new Wave(mouseX,mouseY,30,100);
	waveArray.push(newWave);
} 

function keyPressed(){
	sound1.stop();
	sound2.stop();
	sound3.stop();
}

function Wave(_x,_y,_s,_m){
this.x = _x
this.y = _y
this.size = _s
this.max = _m

//this displays the circle
this.display = function(){
	noFill();
	strokeWeight(4);
	stroke(0,100,200);
	ellipse(this.x,this.y,this.size,this.size);
}
//this makes the circle grow
this.move = function(){
	//background(200);
	this.size += 2;
	if (this.size > this.max){
		//this resets the circle so it can grow again
		this.size = _s
		ellipse(this.x,this.y,this.size, this.size);
		console.log("out of bounds");
	}

}

this.sound = function(){
	if(this.x < 300){
		sound1.play();
	}
	else if (this.x > 300 ){
		sound2.play();
	}
	else if (this.x == 300){
		sound3.play();
	}

}
};
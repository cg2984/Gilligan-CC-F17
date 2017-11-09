var myData; 
var size = [];
var movies = [];

function preload(){
 myData = loadJSON("assets/netflix-categories.json");
}


function setup(){
	createCanvas(600,600);
	background(255,0,0);
	//a
	for (var i = 0; i < 21; i++){
		console.log(myData.categories[i]);
		movies[i] = myData.categories[i];
		console.log(myData.categories[1].length);
		size[i] = myData.categories[i].length;
	}
	text("The Number of Letters in each Movie Category in the A Section", 10,10, 200,200)

	
}


function draw(){
	fill(255);
	stroke(150);
	//ellipse(100,100,40,40);
	for(var i = 0; i < 21; i++){
		ellipse(300, (i*25)+20, size[i],size[i]);
		text(movies[i], 400, (i*27)+20, 100,50);
	}
	
}


var url; 
var index = [];
var baseUrl; 
var query; 
var appid; 
var i = 0;
var indexTxt = [];
var time; 


function setup(){
	createCanvas(600,600);
	// base url for the ny times 
	baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
	//different categories it will scroll through
	index[0] = "?q=The"
	index[1] = "?q=New"
	index[2] = "?q=York"
	index[3] = "?q=Times"
	appid = "api-key=9355c6ef5b66477db33bb5920d3f1bcf"
	url = baseUrl + index[i] + "&" + appid; 
	//console.log(url);
	myData = loadJSON(url);
	console.log(myData);

	setInterval(qData, 5000);
}
	

function draw(){
	text("The + New + York + Times", 100, 200, 400);
}


function gotData(temp){
	myData = temp; 
	indexTxt[0] = temp.response.docs[0].headline.main
	console.log(indexTxt[0]);
	text(indexTxt[0], random(0, width), random(0,height), 400);
}

function qData (){
	loadJSON(url, gotData); 
}

function keyPressed(){
	if(i < 4){
		i += 1; 
		url = baseUrl + index[i] + "&" + appid; 

	}
	else {
		url = baseUrl + index[0] + "&" + appid; 
	}
	 myData = loadJSON(url, gotData); 
}

function mouseClicked(){
	if (myData) {
		console.log(myData);
	}
	
}




    
//API INFORMATION
// https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=013b067090a28369bb3bb907d41b07e9&photo_id=6776314564&format=json&nojsoncallback=1
//<a data-flickr-embed="true"  href="https://www.flickr.com/photos/30120194@N02/6776314564/" title="Dogs. Varanasi"><img src="https://farm8.staticflickr.com/7060/6776314564_2432e19765.jpg" width="500" height="334" alt="Dogs. Varanasi"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2bd626269ec6df46745b6f9e7ef1b7d1&tags=dogs&privacy_filter=1&safe_search=1&is_getty=true&format=json&nojsoncallback=1
//key: 4b04cac958637c35daefc92f7b4633c6
//secret: 6577b7c0aa1bf110

//*************************************************************************VARIABLES***************************************************************************************************
//holds size of stroke
var str; 
//holds stroke color
var col = [];
//holds all the sliders
var slider = []; 
//holds the text for the link
var txt; 
// these are for the for loop+arrays 
var j;
var i;
//for the input
var input;
//photo id url
var url;  
//search url
var url2;
var query;
//holds the search input field 
var search;
//photo id data 
var data; 
//search data and url creation stuff
var data2;
var searchItem;
var appid; 
var baseUrl;
var brush;
var method; 
var img; 
var photoID
var pID;
var search; 
//this holds the position of the photo in the database array 
var aVal = 0;
//holds all the on screen text variables 
var cTxt = [];
//all the buttons
var button = []; 
//holds picked color
var pick; 
//holds the image from the api
var img2;
//holds opacoty
var opc; 
//slider[1] is the size 
//slider[2-4] is rgb respectivley

function setup(){
	canvas = createCanvas(600,500);
	background(255);
	canvas.position(100,100);
	canvas.style("background-color", "#000000");
	canvas.style("padding", "5px");

	//creating size slider
	slider[3] = createSlider(2,50,0);
	slider[3].position(10,60);
	sTxt = new Writing(150,54, "Adjust Size");
	sTxt.display();
	slider[4] = createSlider(0,300,300);
	slider[4].position(10,80)
	var oTxt = new Writing(150,74,"Adjust Opacity");
	oTxt.display();

	//creating color sliders
	for (i = 0; i < 3; i++){
		slider[i] = createSlider(0,255,0);
		slider[i] = slider[i].position(10, (i*20));
	}

	cTxt[0] = new Writing(150,-6,"Adjust Red");
	cTxt[0].display();
	cTxt[1] = new Writing (150,14, "Adjust Green");
	cTxt[1].display();
	cTxt[2] = new Writing (150,34,"Adjust Blue");
	cTxt[2].display();

	//search text input
	search = createInput('What do you want to draw?');
	search.position(750,100);

	//search button
	button[0] = createButton('Search');
	button[0].position(750, 150);
	button[0].mousePressed(searchApi);

	button[1] = createButton("Image link");
	button[1].position(830,150);
	button[1].mousePressed(link)

	//forward and backwards buttons 
	button[2] = createButton("Next Picture");
	button[2].mousePressed(forward); 
	button[2].position(950,150);

	button[5] = createButton("Last Picture");
	button[5].mousePressed(back);
	button[5].position(1050, 150);

	//screen clear button
	button[3] = createButton("Clear Screen");
	button[3].position (900,45);
	button[3].mousePressed(clrScreen); 

	//save button
	button[4] = createButton("Save");
	button[4].position(10, 300); 
	button[4].mousePressed(saveDrawing);

	//legend
	var wLegend = createElement("p", "Legend");
	wLegend.position(450,0);
	wLegend.style("font-family", "sans-serif");
	wLegend.style("font-size","20px");
	wLegend.style("color","#000000");

	var legend = new Writing(250,40, " UP ARROW pen draw, DOWN ARROW square, RIGHT ARROW color change, LEFT ARROW triangle");
	legend.display();	
}


function draw(){
	//making size slider change the size
	str = slider[3].value();

	//making color sliders change the color
	for(j = 0; j < 3; j++){
		col[j] = slider[j].value();
	}
	col[3] = slider[4].value();
	noStroke();
	fill(col[0],col[1],col[2], col[3]);
	rect(10,10,20,20);
	noStroke(0);
	fill(0);
}

//************************************************************************************BUTTON FUNCTIONS***********************************************************************************

function clrScreen(){
	background(255);
}

//goes to the previous picture, it has to load the image again
function back(){
	//removes the previous image(if there is one)
	img2.remove();

	//moves the array position back
	aVal = aVal + (-1);

	//removes the previous link (if there is one)
	if(txt){
		txt.remove();
	}
	else {
		console.log("nothing to remove");
	}
	//puts input in search
	searchItem = search.value();
	console.log(searchItem);
	
	//creates url
	baseURL2 = "api.flickr.com/services/rest/?method=";
	method2 = "flickr.photos.search";
	query = search.value();
	appid = "&api_key=9ebd6792f59cd788440104a70dd33bd3";
	var searchParam = "&tags=" + query;
	var searchXtra = "&privacy_filter=1&safe_search=1&is_getty=1&format=json&nojsoncallback=1";
	url2 = "https://" + baseURL2 + method2 + appid + searchParam + searchXtra; 

	//loading search data
	data2 = loadJSON(url2);
	console.log(data2);
	console.log("search data has begun loading");

	//loading the search data
	loadJSON(url2,gotSearch);
	console.log(data2);
	console.log("seach data going though searchApi");
}

//goes to the first picture, it has to load the image again
function forward () {
	//removes the previous image(if there is one)
	img2.remove();
	if(txt){
		txt.remove();
	}
	else {
		console.log("nothing to remove");
	}
	//keeps the array number below 100, which is the highest the api goes
	if (aVal > 100){
		aVal = 0;
	}
	else {
		aVal++;
	}

	//says the section of the array the image is in
	console.log(aVal);

	//puts the input into the search
	searchItem = search.value();
	console.log(searchItem);

	//creating the url
	baseURL2 = "api.flickr.com/services/rest/?method=";
	method2 = "flickr.photos.search";
	query = search.value();
	appid = "&api_key=9ebd6792f59cd788440104a70dd33bd3";
	var searchParam = "&tags=" + query;
	var searchXtra = "&privacy_filter=1&safe_search=1&is_getty=1&format=json&nojsoncallback=1";
	url2 = "https://" + baseURL2 + method2 + appid + searchParam + searchXtra; 

	//loading search data
	data2 = loadJSON(url2);
	console.log(data2);
	console.log("search data has begun loading");

	//loading the search data
	loadJSON(url2,gotSearch);
	console.log(data2);
	console.log("seach data going though searchApi");
}

function saveDrawing(){
	saveCanvas("sketch", "jpg");
}

//*******************************************************************************************API FUNCTIONS*******************************************************************************************************
//loads the image link
function link(){
	//removes the previous link if there is one when loading up the image link
	if (txt){
		txt.remove();
	}
	else {
		console.log("no link to remove");
	}

	//creating photo id url after you get the id from the search
	baseUrl = "api.flickr.com/services/rest/?method=";
	method = "flickr.photos.getInfo"
	photoID = "&photo_id=" + pID;
	appid = "&api_key=05aca02bba59228938889d29c564c98c"; 
	url =  "https://" + baseUrl + method + appid + photoID + "&format=json&nojsoncallback=1";

	//intial loading of JSON
	data = loadJSON(url);
	console.log(data);
	console.log("have loaded inital ID data")

	//loading the photo id data via callback loop
	loadJSON(url, gotID);
	console.log(data);
	console.log("photo id data has gone through the search api function");	
}
//call back function for the information for the image link
function gotID(tempData){
	noStroke();
	fill(255);
	rect(250,0, 400, 20);
	data = tempData;
	console.log("photoID tempData has loaded");
	console.log(tempData);
	console.log("showing the url")
	console.log(tempData.photo.urls.url[0]._content);
	var linkTxt = tempData.photo.urls.url[0]._content;
	txt = createDiv("<a href =" + linkTxt + ">" + linkTxt + "</a>");
	txt.position(925,100);
	
}

//callback function
function gotSearch(tempData2){

	data2 = tempData2;
	console.log("search tempData has loaded");

	//loading up the image onto the screen
	var farm = "farm" + tempData2.photos.photo[aVal].farm; 
	var baseImgURl = ".staticflickr.com";
	var imgServer = "/" + data2.photos.photo[aVal].server + "/";
	var imgID =  tempData2.photos.photo[aVal].id + "_"; 
	var imgSecret = tempData2.photos.photo[aVal].secret; 
	var imgURL = "https://" + farm + baseImgURl + imgServer + imgID + imgSecret + ".jpg";
	img2 = createImg(imgURL);
	img2.position(800,200);
	img2.style("background-color", "#000000");
	img2.style("padding", "5px");


	pID = tempData2.photos.photo[aVal].id;
	console.log(pID);
}

function searchApi (){
	//logging the part of the array that the picture is in
	console.log("the array section")
	console.log(aVal);

	//taking the information from the input field and puts it here
	searchItem = search.value();
	console.log(searchItem);
	
	//creating the url
	baseURL2 = "api.flickr.com/services/rest/?method=";
	method2 = "flickr.photos.search";
	query = search.value();
	appid = "&api_key=9ebd6792f59cd788440104a70dd33bd3";
	var searchParam = "&tags=" + query;
	var searchXtra = "&privacy_filter=1&safe_search=1&is_getty=1&format=json&nojsoncallback=1";
	url2 = "https://" + baseURL2 + method2 + appid + searchParam + searchXtra; 

	//loading search data the first time (i cant put it in setup because it needs to load more than once)
	data2 = loadJSON(url2);
	console.log(data2);
	console.log("search data has begun loading");

	//loading search data a second time
	loadJSON(url2,gotSearch);
	console.log(data2);
	console.log("seach data going though searchApi")

	//this part removes the previous image if another is called
	if (img2){
		img2.remove();
	}
	else {
		console.log("nothing to remove");
	}
}

//*****************************************************************************************DRAWING TOOL FUNCTIONS****************************************************************************************

function mouseDragged(){ 
	//all the values are put here to create a line
	//normal tool
	if (brush == 0) {
		stroke(col[0],col[1],col[2],col[3]);
		strokeWeight(str);
		line(mouseX,mouseY,pmouseX,pmouseY);
	}
	//rectangle tool
	else if (brush == 1) {
		noStroke();
		fill(col[0],col[1],col[2],col[3]);
		rect(mouseX,mouseY,str,str);
	}
	//rainbow tool
	else if (brush == 2) {
		var redVal = map(mouseX, 0,width,0,255);
		stroke(redVal,col[1],col[2],col[3]);
		strokeWeight(str);
		line(mouseX,mouseY,pmouseX,pmouseY);
	}
	//triangle tool 
	else if (brush == 3) {
		noStroke();
		fill(col[0],col[1],col[2],col[3]);
		triangle (mouseX,mouseY,mouseX+5,mouseY-10, mouseX-5,mouseY-10);
	}
	else {
		stroke(col[0],col[1],col[2],col[3]);
		strokeWeight(str);
		line(mouseX,mouseY,pmouseX,pmouseY);
	}
}

function keyReleased(){
	if (keyCode == UP_ARROW) {
		brush = 0;
	}
	else if (keyCode == DOWN_ARROW){
		brush = 1; 
	}
	else if (keyCode == RIGHT_ARROW){
		brush = 2;
	}
	else if (keyCode == LEFT_ARROW){
		brush = 3;
	}
	else if (keyCode == SHIFT){
		if (data){		
		}
		else {
			console.log("data is messed up");
		}
	}
	else {
		console.log("something is wrong with the brush selection");
	}

}

//**********************************************************************************************CLASS************************************************************************************************

function Writing (_x, _y,_t) {
	this.x = _x;
	this.y = _y;
	this.t = _t
	this.display = function(){
		tmpTxt = createElement("p", _t);
		tmpTxt.position(this.x, this.y);
		tmpTxt.style("font-family", "sans-serif");
		tmpTxt.style("font-size", "12px")
		tmpTxt.style("color","#00000")
	}
};



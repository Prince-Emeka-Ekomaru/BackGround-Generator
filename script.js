var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.createElement("button"); 
var h3 = document.querySelector("h3");


button.appendChild(document.createTextNode("Select a random Color"));
body.appendChild(button);

function randomColor() {
	var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ')';
	// var color = Math.floor(Math.random()*16777215).toString(16);
	return color;
}

function getRandomColor() {
	var rColor1 = randomColor();
	var rColor2 = randomColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ rColor1
	+ ", " 
	+ rColor2
	+ ")";
	h3.textContent = body.style.background + ";";
	console.log(rColor1)
	console.log(rColor2)
	console.log(body.style.background)
}


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

button.addEventListener("click", getRandomColor)

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color1.addEventListener("input", setGradient());

color2.addEventListener("input", setGradient());
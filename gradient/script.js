var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.querySelector(".randomize");

randomizer();

function setGradient(){
		body.style.background = 
				"linear-gradient(to right, " 
				+ color1.value 
				+ ", " 
				+ color2.value 
				+ ")";

				css.textContent = body.style.background + ";";
}

function randomizer(){
	color1.value = aRandomHexColor();
	color2.value = aRandomHexColor();
	setGradient();
}

function aRandomHexColor(){
// padding prevents an occasional bug where a 5 digit hex number is generated
	var aRandomHexNumber = Math.floor(Math.random()*16777216).toString(16);
	return '#' + aRandomHexNumber.padStart(6,"0");
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
randomize.addEventListener("click",randomizer);

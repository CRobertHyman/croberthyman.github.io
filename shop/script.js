
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var allLis = ul.getElementsByTagName("li");


function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("delete"));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addToListAfterClick(){
		if(inputLength() > 0){
		createListElement();
	}
}

function addToListAfterKeypress(event){
	if(inputLength() > 0 && event.which === 13){
	createListElement();
	}
}

function ulClicker(event){
	var tag = event.target.tagName;
	if (tag === "LI") {
	toggleDone(event);
}else if(tag === "BUTTON"){
	clickedDelete(event);
}
}

function toggleDone(event){
event.target.classList.toggle("done");
}

function clickedDelete(event){
	event.target.parentNode.remove();
}

button.addEventListener("click",addToListAfterClick)
input.addEventListener("keypress",addToListAfterKeypress)
ul.addEventListener("click",ulClicker);

var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtn = document.getElementsByClassName("close");
var lis = document.getElementsByTagName("li");



function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button")
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("x"));
	ul.appendChild(li);
	li.appendChild(btn);
	li.classList.add("list-group-item");
	btn.classList.add("close");
	input.value = "";	
}



function addListAfterKeypress(event) {

	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addStrikeAfterClick(event){

   if (event.target.tagName ==='LI') { 
   event.target.classList.toggle("done");
   //event.target.classList.remove("li"); 
	}
}

function deleteFunction(eve){
	if(event.target.tagName ==='BUTTON'){
		event.target.parentNode.remove();
	}
    
}



input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click",addStrikeAfterClick);

ul.addEventListener("click" , deleteFunction);





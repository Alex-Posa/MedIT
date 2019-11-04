function initPigLatinGenerator() {
    alert("Time to translate some stuff");
	setTranslateButtonListener();
}

// Listener is the first thing you should do

function setTranslateButtonListener(){
	var translateButton = document.getElementById("generate_pig_latin_button");
	translateButton.addEventListener("click", startOutput);
}

// the Listenerevent will call a function
// the source of the direction you want to save something has to be called here

function startOutput(){
	console.log("test");
	var output = document.getElementById("output");
	output.innerHTML = getText();
}

// gets the text from the source which you want to translate
// and saves it into a variable  

function getText(){
	var input = document.getElementById("input_sentence");
	var inputText = input.value;
	return translate(inputText);
}

//

function translate(inputText) {

var translatedText = inputText;
var seperatedText = translatedText.split(" ");
 

return translatedText;
}

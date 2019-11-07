// first function that will be loaded upon entering a page

function initPigLatinGenerator() {
    alert("Time to translate some stuff");
	setTranslateButtonListener();
}

// Listener is the first thing you should do

function setTranslateButtonListener(){
	var translateButton = document.getElementById("generate_pig_latin_button");
	translateButton.addEventListener("click", getText);
}

// the Listenerevent will call a function
// the source of the direction you want to save something has to be called here

/*function startOutput(){
	console.log("test");
	var output = document.getElementById("output");
	output.innerHTML = getText();
}
*/

// gets the text from the source which you want to translate
// and saves it into a variable  

function getText(){
	var input = document.getElementById("input_sentence");
	var inputText = input.value;
	var translation = translate(inputText);
	pigLatinFinal(translation);
}

//"main" - function that translates the input text gets initialized here

function translate(inputText) {

var translatedText = inputText;
var seperatedText = translatedText.split(" ");
var newSentenceVariable = "";

for(var i = 0; i < seperatedText.length; i++){
	var seperatedTranslatedWord = translateWord(seperatedText[i]); 
	newSentenceVariable = newSentenceVariable + " " + seperatedTranslatedWord; 
}
 
 
return newSentenceVariable;
}

// sub-function that translates a single word from the splitted array we created above

function translateWord(toTranslateWord){
	if(specialChar(toTranslateWord)){
		return toTranslateWord;
	}
	
	var pigLatinWord = "";
	var firstChar = toTranslateWord.charAt(0);
	
	if(isVowel(firstChar)){
		pigLatinWord = toTranslateWord + "yay";
	} else {
		pigLatinWord = toTranslateWord.substring(1);
		pigLatinWord += toTranslateWord.charAt(0) + "ay";
	}
	
	
	return pigLatinWord;
}

//checks if the given word has a special character, if it does we dont translate and simply return it
function specialChar(splittedWord){
	var splittedWord = splittedWord.toLowerCase();
    for (var c = 0; c < splittedWord.length; c++) {
        if (splittedWord.charCodeAt(c) < "a".charCodeAt(0) || splittedWord.charCodeAt(c) > "z".charCodeAt(0)) {
            return true;
        }
    }
    return false;
}


// checks whether or not the first character at a given splitted word is a vowel or not, will return a bool-value

function isVowel(character){
	
	var vowel = false;
	var vowelArray = new Array ("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");
	for(var p = 0; p < vowelArray.length; p++){
		if(character == vowelArray[p]){
			vowel = true;
			break;
		}
	}
	return vowel;
}

// finalizing the programm by printing the newly translated sentence

function pigLatinFinal(output){
	
	var finalSentence = document.getElementById("output");
	finalSentence.innerHTML = output;
}

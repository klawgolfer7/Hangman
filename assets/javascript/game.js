

var guesses = [
	["B", "A", "S", "K", "E", "T", "B", "A", "L", "L"],
	["B", "A", "S", "E", "B", "A", "L", "L"],
  ["F","O","O","T","B","A","L","L"],
  ["H","O","M","E"," ","R","U","N"],
  ["S","T","R","I","K","E"],
  ["B","I","R","D","I","E"],
  ["G","O","L","F"],
  ["S","L","A","M"," ","D","U","N","K"]
];

var random = Math.floor((Math.random()*(guesses.length-1))); 
var randomsportword = guesses[random]; // the word to guess will be chosen from the array above
var placedletter = new Array(randomsportword.length);
var startletter = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < placedletter.length; i++){
	placedletter[i] = "_ ";
}

// prints the guessfield
function printsportword(){
	for (var i = 0; i < placedletter.length; i++){
	var guessfield = document.getElementById("underlinefield");
	var creationnode = document.createTextNode(placedletter[i]);
	guessfield.appendChild(creationnode);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var checkForMatch = function(){
	var f = document.rateformular; 
	var b = f.elements["letterinput"]; 
	var userInput = b.value; // the letter provided by the user
	userInput = userInput.toUpperCase();
	for (var i = 0; i < randomsportword.length; i++){
		if(randomsportword[i] === userInput){
			placedletter[i] = userInput + " ";
			var response = true;
		}
	b.value = "";
	}
	
	//deletes the guessfield and replaces it with the new one
	var guessfield = document.getElementById("underlinefield");
	guessfield.innerHTML=""; 
	printsportword();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!response){
		var wrongLetter = document.getElementById("wrongLetter");
		var creationnode = document.createTextNode(" " + userInput);
		wrongLetter.appendChild(creationnode); 
		startletter++;
		var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + startletter + ".png";
	}
	
	//checks if all letters have been found
	var checkWin = true;
	for (var i = 0; i < placedletter.length; i++){
		if(placedletter[i] === "_ ") {
			checkWin = false;
		}
	}
	if(checkWin){
		window.alert("You win!");
	}
	
	//once you got six wrong letters, you lose
	if(startletter === 6){
		window.alert("Uh...I guess you're dead now.");
	}
}

function init(){
	printsportword();
}

window.onload = init;


var guesses = [
	["B","A","S","K","E","T","B","A","L","L"],
	["B","A","S","E","B","A","L","L"],
  ["F","O","O","T","B","A","L","L"],
  ["T","O","U","C","H","D","O","W","N"],
  ["S","T","R","I","K","E"],
  ["B","I","R","D","I","E"],
  ["G","O","L","F"],
  ["T","R","I","P","L","E"],
  ["K","I","C","K","O","F","F"],
  ["S","O","C","C","E","R"],
  ["A","S","S","I","S","T"],
  ["S","T","E","A","L"],
  ["B","O","G","E","Y"],
  ["C","U","R","L","I","N","G"],
  ["H","O","C","K","E","Y"]
];

// sets random variable equal to a random number the 
// length of guesses minus 1
var random = Math.floor((Math.random()*(guesses.length-1)));
 // the word to guess will be chosen from the array above
var randomSportWord = guesses[random];

var placedLetter = new Array(randomSportWord.length);
// Guess amount total 
var guessAmount = 0;

// every letter in the word is symbolized by an underscore in the guessField
for (var i = 0; i < placedLetter.length; i++){
	placedLetter[i] = "_ ";
}

// prints the guessField
function pringSportWord(){
	for (var i = 0; i < placedLetter.length; i++){
	var guessField = document.getElementById("underlinefield");
	var creationNode = document.createTextNode(placedLetter[i]);
	guessField.appendChild(creationNode);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var checkForMatch = function(){
	var f = document.rateformular; 
	var b = f.elements["letterinput"]; 
	var userInput = b.value; // the letter provided by the user
	userInput = userInput.toUpperCase();
	for (var i = 0; i < randomSportWord.length; i++){
		if(randomSportWord[i] === userInput){
			placedLetter[i] = userInput + " ";
			var response = true;
		}
	b.value = "";
	}
	
	//deletes the guessField and replaces it with the new one
	var guessField = document.getElementById("underlinefield");
	guessField.innerHTML=""; 
	pringSportWord();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!response){
		var wrongLetter = document.getElementById("wrongLetter");
		var creationNode = document.createTextNode(" " + userInput);
		wrongLetter.appendChild(creationNode); 
		guessAmount++;
		var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + guessAmount + ".png";
	}
	
	//checks if all letters have been found
	var checkWin = true;
	for (var i = 0; i < placedLetter.length; i++){
		if(placedLetter[i] === "_ ") {
			checkWin = false;
		}
	}
	if(checkWin){
		window.alert("You win!");
	}
	
	//once you got six wrong letters, you lose
	if(guessAmount === 6){
		window.alert("Uh...I guess you're dead now.");
	}
}

document.getElementById("id_of_textbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("id_of_button").click();
    }
});


function init(){
	pringSportWord();
}

window.onload = init;
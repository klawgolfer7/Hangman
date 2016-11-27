

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
var fehler = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < placedletter.length; i++){
	placedletter[i] = "_ ";
}

// prints the guessfield
function printsportword(){
	for (var i = 0; i < placedletter.length; i++){
	var ratefeld = document.getElementById("ratefeld");
	var buchstabe = document.createTextNode(placedletter[i]);
	ratefeld.appendChild(buchstabe);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var pruefeZeichen = function(){
	var f = document.rateformular; 
	var b = f.elements["ratezeichen"]; 
	var zeichen = b.value; // the letter provided by the user
	zeichen = zeichen.toUpperCase();
	for (var i = 0; i < randomsportword.length; i++){
		if(randomsportword[i] === zeichen){
			placedletter[i] = zeichen + " ";
			var treffer = true;
		}
	b.value = "";
	}
	
	//deletes the guessfield and replaces it with the new one
	var ratefeld = document.getElementById("ratefeld");
	ratefeld.innerHTML=""; 
	printsportword();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!treffer){
		var gerateneBuchstaben = document.getElementById("gerateneBuchstaben");
		var buchstabe = document.createTextNode(" " + zeichen);
		gerateneBuchstaben.appendChild(buchstabe); 
		fehler++;
		var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + fehler + ".png";
	}
	
	//checks if all letters have been found
	var fertig = true;
	for (var i = 0; i < placedletter.length; i++){
		if(placedletter[i] === "_ "){
			fertig = false;
		}
	}
	if(fertig){
		window.alert("You win!");
	}
	
	//once you got six wrong letters, you lose
	if(fehler === 6){
		window.alert("Uh...I guess you're dead now.");
	}
}

function init(){
	printsportword();
}

window.onload = init;
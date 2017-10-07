
var words = ["rick", "morty", "portal", "math", "science", "garage", "schwifty"];

var currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();


var chancesLeft = 10;
document.getElementById("chances-left").textContent = "Chances Left: " + chancesLeft;

var wins = 0;
document.getElementById("w").innerHTML = "Wins: " + wins;

var loss = 0;
document.getElementById("l").innerHTML = "Losses: " + loss;

var resetLettersGuessed = "Letters Guessed: "

var progressWord = [];

var mysteryWord = [];
var i;

console.log("Solve This Word: " + currentWord);

for (i = 0; i < currentWord.length; i++) {
    progressWord.push("__");
}
document.getElementById("word-guess").innerHTML = progressWord.join(" ");

function letterInWord(letter) {
    var positions = new Array();
    for (i = 0 ; i < currentWord.length; i++) {
        if (currentWord[i] === letter)
            positions.push(i);
    }
    return positions
}

function lettersToGuess() {
    var i ;
    var toGess = 0 ;
    for (i in progressWord) {
        if (progressWord[i] === "__")
            toGess++;
    }
    return toGess;
}

document.onkeyup = function (event) {
    var letter = event.key;
    var lettersGuessed = letter.toLocaleUpperCase();
    var i;

    console.log("You have typed a letter: ".concat(letter));

    var positions = letterInWord(lettersGuessed);

    if (positions.length) {
        console.log("User has pressed a letter from word: " + letter);

        for (i = 0 ; i < positions.length; i++) {
            progressWord[positions[i]] = lettersGuessed;
        }

        document.getElementById("word-guess").innerHTML = progressWord.join(" ");
    } else {
        document.getElementById("letters-guessed").innerHTML += lettersGuessed + " ";
        chancesLeft--;
        document.getElementById("chances-left").textContent = "Chances Left: " + chancesLeft;
    }

    if (chancesLeft < 1) {

        loss = loss + 1;
        currentWord.toUpperCase();
        document.getElementById("l").innerHTML = "L: " + loss;
        chancesLeft = 10;
        document.getElementById("letters-guessed").innerHTML = resetLettersGuessed;


    }
    if (lettersToGuess() == 0) {

      alert("You Got It!");

        chancesLeft = 10;
        document.getElementById("chances-left").textContent = "Chances Left: " + chancesLeft;
        document.getElementById("letters-guessed").innerHTML = resetLettersGuessed;

        progressWord = [];
        for (i = 0; i < currentWord.length; i++) {
            progressWord.push("__");
        }
        document.getElementById("word-guess").innerHTML = progressWord.join(" ");

        wins++;
        document.getElementById("w").innerHTML = "Wins: " + wins;
    }
}

var win = 0;
var loss = 0;
document.querySelector(".Wins").innerHTML = win;
document.querySelector(".Losses").innerHTML = loss;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guesses = 5;
document.querySelector(".guesses-remaining").innerHTML = guesses;

var lettersGuessed = [];
document.querySelector(".letters-guessed").innerHTML = lettersGuessed;

var Words = ["triceratops", "pterodactyl", "raptor", "brachiosaurus", "allosaurus", "apatosaurus", "stegosaurus", "sauropods", "diplodocus", "iguanodon"];
var compGuess = Words[Math.floor(Math.random() * Words.length)];
console.log(compGuess);
var SplitcompGuess = compGuess.split("");
console.log(SplitcompGuess);
var answerArray = [];
for (var i = 0; i < compGuess.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = compGuess.length;
document.querySelector(".current-word").innerHTML = answerArray.join(" ");


document.onkeydown = function (event) {
    var attempt = event.key;
    for (var i = 0; i < compGuess.length; i++) {
        if (attempt === compGuess[i]) {
            answerArray[i] = attempt;
            document.querySelector(".current-word").innerHTML = answerArray.join(" ");
            console.log(attempt + " is Right!");
        }
    }
    if (SplitcompGuess.includes(attempt) === false) {
        if (alphabet.includes(attempt)) {
            var o = alphabet.indexOf(attempt);
            console.log(o);
            console.log(attempt + " is Wrong!");
            guesses--;
            document.querySelector(".guesses-remaining").innerHTML = guesses;
            lettersGuessed.push(attempt);
            document.querySelector(".letters-guessed").innerHTML = lettersGuessed;
            alphabet.splice(o, 1);
        }
    }
}



document.onkeyup = function (event) {
    if (guesses === 0) {
        loss++;
        document.querySelector(".Losses").innerHTML = loss;
        alert("You were eaten by a Tyrannosarus Rex! Play Again??");
        guesses = 5;
        document.querySelector(".guesses-remaining").innerHTML = guesses;
        lettersGuessed.length = 0;
        answerArray.length = 0;
        document.querySelector(".letters-guessed").innerHTML = lettersGuessed;
        compGuess = Words[Math.floor(Math.random() * Words.length)];
        console.log(compGuess);
        SplitcompGuess = compGuess.split("");
        console.log(SplitcompGuess);
        for (var i = 0; i < compGuess.length; i++) {
            answerArray[i] = "_";
        }
        var remainingLetters = compGuess.length;
        document.querySelector(".current-word").innerHTML = answerArray.join(" ");
        alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }
    if (answerArray.indexOf("_") === -1) {
        win++;
        document.querySelector(".Wins").innerHTML = win;
        alert("Why hello there, Dr. Ian Malcolm. I guess you found a way!");
        guesses = 5;
        document.querySelector(".guesses-remaining").innerHTML = guesses;
        lettersGuessed.length = 0;
        answerArray.length = 0;
        document.querySelector(".letters-guessed").innerHTML = lettersGuessed;
        compGuess = Words[Math.floor(Math.random() * Words.length)];
        console.log(compGuess);
        SplitcompGuess = compGuess.split("");
        console.log(SplitcompGuess);
        for (var i = 0; i < compGuess.length; i++) {
            answerArray[i] = "_";
        }
        var remainingLetters = compGuess.length;
        document.querySelector(".current-word").innerHTML = answerArray.join(" ");
        alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }
}






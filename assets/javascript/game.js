var win = 0;
var loss = 0;
document.querySelector(".Wins").innerHTML = win;
document.querySelector(".Losses").innerHTML = loss;

var guesses = 10;
document.querySelector(".guesses-remaining").innerHTML = guesses;

var lettersGuessed = [];
document.querySelector(".letters-guessed").innerHTML = lettersGuessed;

var Words = ["triceratops", "pterodactyl", "raptor", "brachiosaurus"];
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
    console.log(attempt);
    for (var i = 0; i < compGuess.length; i++) {
        if (attempt === compGuess[i]) {
            answerArray[i] = attempt;
            document.querySelector(".current-word").innerHTML = answerArray.join(" ");
            console.log(attempt + " is Right!");
        }
    }
    if (SplitcompGuess.includes(attempt) === false) {
        console.log(attempt + " is Wrong!");
        guesses--;
        document.querySelector(".guesses-remaining").innerHTML = guesses;
        lettersGuessed.push(attempt);
        document.querySelector(".letters-guessed").innerHTML = lettersGuessed;
    }
}


document.onkeyup = function (event) {
    if (guesses === 0) {
        loss++;
        document.querySelector(".Losses").innerHTML = loss;
        alert("You were eaten by a Tyrannosarus Rex! Play Again??");
        guesses = 10;
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
    }
    if (answerArray.indexOf("_") === -1) {
        win++;
        document.querySelector(".Wins").innerHTML = win;
        alert("Why hello there, Dr. Ian Malcolm. I guess you found a way!");
        guesses = 10;
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
    }
}






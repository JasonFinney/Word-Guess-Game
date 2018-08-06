var Words = ["triceratops", "pterodactyl", "raptor", "brachiosaurus"];

var randomArray;

var _array = [];

var _array1 = [];

var guesses = 10;

var win = 0;
var loss = 0;

var lettersGuessed = [];

var answerArray = [];

// function NewGame() {

//     var compGuess = Words[Math.floor(Math.random() * Words.length)];
//     console.log(compGuess);

//     var answerArray = [];
//     for (var i = 0; i < compGuess.length; i++) {
//         answerArray[i] = "_";
//     }
//     var remainingLetters = compGuess.length;

//     document.querySelector(".Wins").innerHTML = win;
//     document.querySelector(".Losses").innerHTML = loss;
//     document.querySelector(".guesses-remaining").innerHTML = guesses;

//     while (remainingLetters > 0) {
//         document.querySelector(".current-word").innerHTML = answerArray.join(" ");
//         document.onkeyup = function (event) {
//             var attempt = event.key;
//             for (var j = 0; j < word.length; j++) {
//                 if (compGuess[j] === attempt) {
//                     answerArray[j] = attempt;
//                     remainingLetters--;
//                 } else {
//                     guesses--;
//                 }
//             }
//             if (guesses === 0) {
//                 loss++;
//                 document.querySelector(".Losses").innerHTML = loss;
//                 alert("You lose! Play again??")
//             }
//         }
//     }
// }
function NewGame() {

    var computerGuess = Words[Math.floor(Math.random() * Words.length)];

    document.querySelector(".Wins").innerHTML = win;
    document.querySelector(".Losses").innerHTML = loss;
    document.querySelector(".guesses-remaining").innerHTML = guesses;


    randomArray = computerGuess.split("")
    console.log(randomArray);

    _array = [];
    for (var i = 0; i < randomArray.length; i++) {
        _array.push("_");
    }
    document.querySelector(".current-word").innerHTML = _array.join(" ");
}

document.onkeyup = function (event) {
    var attempt = event.key;
    document.querySelector(".guesses-remaining").innerHTML = guesses;
    document.querySelector(".letter-guessed").innerHTML = lettersGuessed;
    if (randomArray.includes(attempt)) {
        console.log(attempt + " is Right!");
    } else {
        console.log(attempt + " is Wrong!");
        guesses--;
        lettersGuessed.push(attempt);
    }

}

// for (var j = 0; j < Words.length; j++) {
//     if (word[j] === event.key) {
//      answerArray[j] = event.key;
//     remainingLetters--;
//      }


// lettersGuessed.shift();

// NewGame()


// document.onkeyup = function (event) {}
var RandomWord = ["random", "words", "face",];

var randomArray;

var _array = [];

var _array1 = [];

var guesses = 10;

var win = 0;
var loss = 0;

var lettersGuessed = [];

function NewGame() {

    var computerGuess = RandomWord[Math.floor(Math.random() * RandomWord.length)];

    document.querySelector(".Wins").innerHTML = win;
    document.querySelector(".Losses").innerHTML = loss;
    document.querySelector(".guesses-remaining").innerHTML = guesses;
    document.querySelector(".letter-guessed").innerHTML = lettersGuessed;

    randomArray = computerGuess.split("")
    console.log(randomArray);

    _array = [];
    for (var i = 0; i < randomArray.length; i++) {
        _array.push("_");
    }
    document.querySelector(".current-word").innerHTML = _array.join(" ");
}


document.onkeyup = function Try(event) {
    document.querySelector(".Wins").innerHTML = win;
    document.querySelector(".Losses").innerHTML = loss;
    document.querySelector(".guesses-remaining").innerHTML = guesses;
    document.querySelector(".letter-guessed").innerHTML = lettersGuessed;
    _array1 = [];
    lettersGuessed = [];

    var attempt = event.key;
    if (randomArray.includes(attempt)) {
        console.log(attempt);
        for (var o = 0; o < randomArray.length; o++) {
            _array1.push("_");
        }
        _array1.push(attempt);
    } else {
        for (var o = 0; o < randomArray.length; o++) {
            _array1.push("_");
        }
        console.log("Wrong! " + attempt);
        lettersGuessed.push(attempt);
    }
    document.querySelector(".current-word").innerHTML = _array1.join(" ");
}


NewGame()


// document.onkeyup = function (event) {}
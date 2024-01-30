function guess() {
    var answer = 6;
    var guessNumber = parseInt(document.getElementById("guess").value);
    var checkAnswer = document.querySelector("#outcome");
    var lastGuess = document.querySelector("h4");

    console.log(answer);
    console.log(guessNumber);
    console.log(guessNumber === answer);
    
    if (guessNumber === answer) {
        checkAnswer.innerHTML = "Correct!"
    }
    else if (guessNumber < answer ) {
        checkAnswer.innerHTML = "Too low!";
        lastGuess.innerHTML = "Your last guess: " + guessNumber
    }
    else if (guessNumber > answer ) {
        checkAnswer.innerHTML = "Too high!";
        lastGuess.innerHTML = "Your last guess: " + guessNumber
    }
}
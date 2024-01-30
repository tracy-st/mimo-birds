const answer = "Seagull";
const planets = ["Little gull", "Pacific gull", "Seagull", "Vega gull"];
let output = document.getElementById("response");

function checkAnswer(i) {
    const button = document.querySelectorAll("button");
    const selection = planets[i];
    if (selection === answer) {
        output.innerHTML = selection + ": Correct! Seagull is a colloquial term for gulls but does not refer to a specific type of gull.";
    }
    else {
        output.innerHTML = selection + ": Try again!"
    }
}
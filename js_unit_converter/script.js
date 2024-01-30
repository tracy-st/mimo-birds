function convert() {
    var input = document.getElementById("inputNo").value;
    var type = document.querySelector("select").value;
    var output = 0;
    var display = document.querySelector("span");

    if (type === "Miles to Kilometers") {
        output = input * 1.60934;
        console.log(output);
        display.innerHTML = "Result: " + input + " mi = " + output + " km";
    }
    else if (type === "Kilometers to Miles") {
        output = input * 0.621371;
        console.log(output);
        display.innerHTML = "Result: " + input + " km = " + output + " mi";
    }
}
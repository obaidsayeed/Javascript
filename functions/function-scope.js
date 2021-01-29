// Global scope
let fahrenToCelsius = function(fahrenheit = 32) {
    // Local scope
    let celsius = (fahrenheit - 32) * 5 / 9;
    if (celsius <= 25) {
        // weather is in Local Scope
        let weather = "Its Chilli outside";
        console.log(weather);
    } else {
        console.log("Its hot outside")
    }
    return celsius;
}

let tempOne = fahrenToCelsius(41);
let tempTwo = fahrenToCelsius(86);

console.log(tempOne);
console.log(tempTwo);
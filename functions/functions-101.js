// Function input (argument), code, output (return value)

let user = function() {
    console.log("Welcome");
}

user();

let square = function(num) {
    let result = num * num;
    return result;
}

let value = square(3);
let value2 = square(9);

console.log(value);
console.log(value2);

let fahrenToCelsius = function(fahren) {
    let celsius = (fahren - 32) * 5 / 9;
    return celsius;
}

let ans = fahrenToCelsius(41);
console.log(ans);
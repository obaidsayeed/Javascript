let number = 4563.243543;
// prints the number uto specified no of decimals
console.log(number.toFixed(2));
// Rounds the number to nearest precision
console.log(Math.round(number));
// Rounds up the number to lower precision
console.log(Math.floor(number));
// Rounds up the number to highest precision
console.log(Math.ceil(number));

//Generates  a random number
let randomNum = Math.random();
console.log(randomNum);

//Make Guess
let makeGuess = function(guess) {
    let min = 1;
    max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNum);
    return guess === randomNum;
}

console.log(makeGuess(3));
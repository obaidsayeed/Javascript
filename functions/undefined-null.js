let name;
name = "Jan";

if (name === undefined) {
    console.log("Please provide a name");
} else {
    console.log(name);
}

// Undefined variables as function arguments
// Undefined variables as function default return values
let square = function(num) {
    console.log(num)
}
let result = square();
console.log(result);

// Null as assigned value
let age = 27;
age = null;
console.log(age);
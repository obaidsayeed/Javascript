let name = "  Newt  ";

//length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

//includes method
let password = 'abc123password456';
console.log(password.includes('password'));

// Trim method
console.log(name.trim());

//function isValidzPassword

let isValidPassword = function(str) {
    if (str.length > 8 && !str.includes('password')) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidPassword('Adventurer'));
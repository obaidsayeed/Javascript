//  const add = function(a, b) {
//      console.log(arguments)
//      return a + b;
//  }

const add = function() {
    console.log(arguments)
    return arguments[0] + arguments[1];
}
console.log(add(4, 5, 6, 7))
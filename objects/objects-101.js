let myBook = {
    title: "Irodov",
    author: "unknown",
    pageCount: 1500
}
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`);

// name, age, location
let profile = {
    name: "Newt",
    age: 26,
    location: "UK"

}

console.log(`${profile.name} is ${profile.age} old`);

profile.age = profile.age + 1;

console.log(`${profile.name} is ${profile.age} old`);
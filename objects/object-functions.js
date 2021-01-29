let myBook = {
    title: "Irodov",
    author: "unknown",
    pageCount: 1500
}

let myBook2 = {
    title: "A Peoples History",
    author: "Howard Zinc",
    pageCount: 1500
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(myBook2);

console.log(bookSummary.pageCountSummary);

// Create function  
let convertFahrenheit = function(fahrenheit) {
    return {
        fahrenheits: `${fahrenheit}`,
        celcius: `${(fahrenheit -32)*5/9}`,
        kelvin: `${273 + 459.67}`
    }
}

let temps = convertFahrenheit(32);
console.log(temps);
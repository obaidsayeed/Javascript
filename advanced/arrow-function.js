const square = (num) => {
    return num * num
}

const squareShort = (num) => num * num

console.log(squareShort(5))

const people = [{
    Name: 'Jeffrey',
    Age: 24
}, {
    Name: 'Arthur',
    Age: 34
}, {
    Name: 'John',
    Age: 26
}]

const under30 = people.filter(function(person) {
    return person.Age < 30;
})

const under30Short = people.filter((person) => person.Age < 30)
console.log(under30Short)

const find = people.find((person) => person.Age === 26)

console.log(find.Name)
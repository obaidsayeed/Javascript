//DOM - Document Object 
const notes = {
    text: 'Ubaid',
    age: 19
}

document.querySelector('#myform').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target.elements.firstname.value);
    e.target.elements.firstname.value = '';
})
document.querySelector('#my-Dropdown').addEventListener('change', function(e) {
    console.log(e.target.value)
})

//localStorage.setItem('location', 'obaid sayeed');
//console.log(localStorage.getItem('item'));
// localStorage.removeItem('location')
// localStorage.clear();

// const userJSON = JSON.stringify(notes)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.text} is ${user.age} old`)
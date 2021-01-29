let game2;
const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses');


window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode);
    game2.makeGuess(guess);
    render();
})

const render = () => {
    puzzleEl.innerHTML = '';
    guessEl.textContent = game2.message;
    game2.puzzle.split('').forEach((word) => {
        const letter = document.createElement('span')
        letter.textContent = word;
        puzzleEl.appendChild(letter);
    })
}

const startGame = async() => {
    const puzzle = await getPuzzle('2')
    game2 = new Game(puzzle, 5);
    render();
}
document.querySelector('#reset').addEventListener('click', startGame);
startGame();

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle);
// }, (err) => {
//     console.log(err);
// })

// getCountry('AF').then((country) => {
//     console.log(country);
// }).catch((error) => {
//     console.log(error);
// })

// getLocation().then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error);
// })

// getCurrentLocation().then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error);
// })
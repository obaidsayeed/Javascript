class Game {
    constructor(words, noOfGuesses) {
        this.words = words.toLowerCase().split('');
        this.guesses = [];
        this.noOfGuesses = noOfGuesses;
        this.status = "playing";
    }
    get puzzle() {
        let puzzle = '';
        this.words.forEach((word) => {
            if (this.guesses.includes(word) || word === ' ') {
                puzzle += word;
            } else {
                puzzle += '_ ';
            }
        })
        return puzzle;
    }
    calcStatus() {
        let finished = true
        this.words.forEach((word) => {
            if (this.guesses.includes(word) || word === " ") {} else {
                finished = false;
            }
        })
        if (this.noOfGuesses === 0) {
            this.status = "failed";
            // console.log(this.status)
        } else if (finished) {
            this.status = 'finished';
            // console.log(this.status)
        } else {
            this.status = 'playing'
                // console.log(this.status)
        }
        return this.status;
    }
    get message() {
        let message = "";
        if (this.calcStatus() === "failed") {
            message = `Nice try: The word was ${this.words.join('')}`;
        } else if (this.calcStatus() === 'finished') {
            message = "Great work! You guessed the word";
        } else {
            message = `Guesses left: ${this.noOfGuesses}`;
        }
        return message;
    }
    makeGuess(guess) {
        if (this.noOfGuesses > 0) {
            guess = guess.toLowerCase();
            const isUnique = !this.guesses.includes(guess)
            if (isUnique) {
                this.guesses.push(guess)
            }
            if (isUnique && !this.words.includes(guess)) {
                this.noOfGuesses -= 1;
            }
            this.calcStatus();
            // const stat = document.createElement('p');
            // stat.textContent = this.calcStatus();
            // document.querySelector('body').appendChild(stat)
        }

    }
}
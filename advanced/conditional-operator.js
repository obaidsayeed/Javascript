const myAge = 27

const message = myAge >= 18 ? 'You are eligible to vote' : 'You are not eligible to vote'
    // if (myAge > 18) {
    //     message = 'You are eligible to vote'
    // } else {
    //     message = 'You are not eligible to vote'
    // }

console.log(message)

const team = ['a', 'b', 'c'];
const ans = team.length <= 4 ? `Team size: ${team.length}` : `too many people on the team`;
console.log(ans);
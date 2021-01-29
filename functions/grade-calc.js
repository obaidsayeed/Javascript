// Stufents score, total possible score
let gradeCalc = function(total, score) {
    let percentage = (score / total) * 100;
    return percentage;
}

let result = gradeCalc(100, 90);

if (result >= 90 & result <= 100) {
    console.log(`A ${result}`);
} else if (result >= 80 & result <= 89) {
    console.log(`B ${result}`);
} else if (result >= 70 & result <= 79) {
    console.log(`C ${result}`);
} else if (result >= 60 & result <= 69) {
    console.log(`D ${result}`);
} else {
    console.log(`E ${result}`);
}
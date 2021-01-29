const getTip = (amount) => {
    if (typeof amount === number) {
        return amount * .25;
    } else {
        throw Error('Argument must be a number')
    }
}

try {
    const result = getTip('abc')
    console.log(result)
} catch {
    console.log('Pass number as an argument')
}
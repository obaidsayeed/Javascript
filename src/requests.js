const getCountry = async(countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json();
        const country = data.find((country) => country.alpha2Code === countryCode)
        return country.name;
    } else {
        throw new Error('You have an error');
    }
}

const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    // Making an HTTp request
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error occured')
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
})

const getLocation = async() => {
    const response = await fetch('http://ipinfo.io/json?token=24a28d6e304094')
    if (response.status === 200) {
        const data = await response.json();
        const country = await getCountry(data.country);
        return `You live in ${data.city},${data.region},${country}`;
    } else {
        throw new Error('You have an error');
    }
}

const getCurrentLocation = async() => {
    const response = await fetch('http://ipinfo.io/json?token=24a28d6e304094')
    if (response.status === 200) {
        const data = await response.json();
        return await getCountry(data.country);
    } else {
        throw new Error('You have an error');
    }
}

export{getPuzzle as default}
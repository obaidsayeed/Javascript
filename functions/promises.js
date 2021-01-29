const getCallBack = (callback) => {
    callback('this is a callback error', undefined);
    callback(undefined, 'this is not a callback error');
}

getCallBack((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

const getDataPromise = new Promise((a, b) => {
    // a('A is called');
    b('B is called');
})

const myPromise = getDataPromise;
myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})
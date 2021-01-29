const createCounter = () => {
    let count = 0;
    return {
        increment() {
            return count++
        },
        decrement() {
            return count--;
        },
        get() {
            return count
        }
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.get())

const createTipper = (baseTip) => {
    return (billamount) => {
        return baseTip * billamount;
    }
}

const Tipper = createTipper(.15);
console.log(Tipper(100))
function createCounter() {
    let count = 0;
    
    function increment() {
        count++;
        console.log(`Current count: ${count}`);
    }

    function decrement() {
        count--;
        console.log(`Current count: ${count}`);
    }

    // return both functions so they can be used outside
    return {
        increment,
        decrement
    };
}

const counter = createCounter();
counter.increment(); // Current count: 1
counter.increment(); // Current count: 2
counter.decrement(); // Current count: 1

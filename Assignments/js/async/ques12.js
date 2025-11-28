const timer = (duration, onComplete) => {
    setTimeout(() => {
        const message = "Timer of " + duration + " ms finished";
        onComplete(message);
    }, duration);
};

const done = (output) => {
    console.log(output);
};

timer(2000, done);


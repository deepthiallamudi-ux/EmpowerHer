//question 11
console.log("Task 1")
console.log("Task 2")
console.log("Task 3")
// question 12
console.log("Message 1")
setTimeout(() => console.log("Message 2 after 2 seconds"), 2);
console.log("Message 3");


// question 13

const loading= setInterval(()=>console.log("Loading....."),1000);

setTimeout( () =>{
    clearInterval(loading);
    console.log("Loaded successfully!");
}, 5000);


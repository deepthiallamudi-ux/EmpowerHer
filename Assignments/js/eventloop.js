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


// question 14

console.log("Begin"); 
setTimeout(() => { console.log("Timeout Task"); }, 0);
     Promise.resolve().then(() => { 
    console.log("Promise Task"); }); 
     console.log("End");

//question 15 - Countdown Timer with setInterval


function startCountdown() {
  
  let seconds = \ 
  console.log(`\n=== Countdown Timer Started (${seconds} seconds) ===\n`);

  // Use setInterval to display remaining time every second
  const countdownInterval = setInterval(() => {
    if (seconds > 0) {
      console.log(`⏱️  Remaining time: ${seconds} seconds`);
      seconds--;
    } else {
      // When countdown reaches zero, stop the timer and print completion message
      clearInterval(countdownInterval);
      console.log("\n✅ Countdown Complete!\n");
    }
  }, 1000);
}

// Run the countdown
startCountdown();
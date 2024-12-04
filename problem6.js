const randomNumber = Math.floor(Math.random() * 10) + 1;

let guess; 

do {
 
  guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);

  if (guess === randomNumber) {
    console.log(`Congratulations You guessed the number: ${randomNumber}`);
  } else {
    console.log("Please enter a valid number.");
  }
} while (guess !== randomNumber);
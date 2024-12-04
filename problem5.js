let userInput;

while (userInput !== "quit") {
    userInput = prompt("Enter something (type 'quit' to exit):");
    if (userInput !== "quit") {
        console.log(`You entered: ${userInput}`);
    }
}

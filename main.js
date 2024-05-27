const readline = require('readline');

// Create an interface for reading data from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Please enter your name: ', (name) => {
    // Store the user's input in a variable
    greet(name)


    // Close the readline interface
    rl.close();
});


const greet = (name) => console.log("your name is " + name);







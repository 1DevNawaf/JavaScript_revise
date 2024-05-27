const readline = require('readline');

// Create an interface for reading data from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main(){
    askForName()
}

function askForName(){
    rl.question('Please enter your name: ', (name) => {
        // Store the user's input in a variable
        greetV2(name)


        // Close the readline interface
        rl.close();
    });
}

const greet = (name) => console.log("your name is " + name);

const greetV2 = (name) => {
    if (name.toLowerCase() === 'nawaf'){
        console.log(`Hail king ${name}`)
    }else {
        console.log("your name is " + name)
    }
}



main()







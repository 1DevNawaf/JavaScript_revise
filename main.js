const readline = require('readline');

// Create an interface for reading data from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main(){
    askForDayNumber()
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
        console.log(`Hail king ${name}`);
    }else {
        console.log("your name is " + name);
    }
}

function askForDayNumber(){
    rl.question("please enter day number: ", (dayNumber) =>{
        checkDay(dayNumber);
        rl.close();
    });
}

function checkDay(dayNumber){
    switch (Number(dayNumber)){
        case 1:
            console.log("Sunday");
            break;

        case 2:
            console.log("Monday");
            break;

        case 3:
            console.log("Tuesday");
            break;

        case 4:
            console.log("Wednesday");
            break;

        case 5:
            console.log("Thursday");
            break;

        case 6:
            console.log("Friday")
            break;

        case 7:
            console.log("Saturday")
            break;

        default:
            console.log("Wrong day");
    }
}



main()







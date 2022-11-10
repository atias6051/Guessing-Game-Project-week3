const readLine = require(`readline`);

// HELLO MEL!

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;
let numAttempts;
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const checkGuess = num => {
    if(num>secretNumber){
        console.log(`Too high.`);
        numAttempts--;
        return false;
    }else if(num<secretNumber){
        console.log(`Too low`)
        numAttempts--;
        return false;
    }else{
        console.log(`Correct`)
        return true;
    }
}

const askGuess = () => {
    rl.question(`Enter a guess: `, (guess) => {
        if(!checkGuess(Number(guess))){
            if(numAttempts===0){
                console.log("Sorry, you are out off guesses. Try again next time!")
                rl.close();
            }else{
                askGuess();
            }
        }else{
            rl.close();
        }
    })
}
let userMin;
let userMax;
const minHandler = min =>{
    userMin = min;
    secretNumber = randomInRange(userMin,userMax)
    console.log(`I'm thinking of a number between ${userMin} and ${userMax}`);
    askGuess();
}
const maxHandler = max =>{
    userMax = max;
    rl.question(`Enter a min number: `, minHandler);
}
const askRange = () =>{
    rl.question(`Enter a max number: `, maxHandler);
}

const askLimit = () => {
    rl.question(`How many attempts do you need? `, num => {
        numAttempts = num;
        askRange();
    })
}
// askGuess();
askLimit();

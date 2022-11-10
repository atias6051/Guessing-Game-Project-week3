const readLine = require(`readline`);


const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = 5;

const checkGuess = num => {
    if(num>secretNumber){
        console.log(`Too high.`);
        return false;
    }else if(num<secretNumber){
        console.log(`Too low`)
        return false;
    }else{
        console.log(`Correct`)
        return true;
    }
}
// const checkGuess = num => {
//     if(num>secretNumber){
//         console.log(`Too high.`);
//         return false;
//     }else if(num<secretNumber){
//         console.log(`Too low`)
//         return false;
//     }else{
//         console.log(`Correct`)
//         return true;
//     }
// }
const askGuess = () => {
    rl.question(`Enter a guess: `, (guess) => {
        if(!checkGuess(Number(guess))){
            askGuess();
        }else{
            rl.close();
        }
    })
}

// console.log(readLine);
// console.log(checkGuess(4));
// console.log(checkGuess(2));
// console.log(checkGuess(15));

askGuess();

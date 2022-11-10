// const readLine = require(`readline`);


// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


const afterQ = (answer)=>{
    console.log(`Your answer is: ${answer}`);
    rl.close();
}

const afterQ1 = (answer)=>{
    console.log(`Your answer is: ${answer}`);
    rl.question(`Where are you? `, afterQ);

};

rl.question(`How are you? `,afterQ1);

// console.log(Math.floor(Math.random()*100))
// console.log(Math.floor(Math.random()*100))
// console.log(Math.random())
// console.log(Math.random())

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getR(5,26));
console.log(getR(5,26));
console.log(getR(5,26));

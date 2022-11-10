const readLine = require(`readline`);


const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


const afterQ = (answer)=>{
    console.log(`Your answer is: ${answer}`);
    rl.close();
}

const afterQ1 = (answer)=>{
    console.log(`Your answer is: ${answer}`);
    rl.question(`Where are you? `, afterQ);

};

rl.question(`How are you? `,afterQ1);

#!/usr/bin/env node
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const minNumber = 0
const maxNumber = 100
const randomNumber = Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber))

const rl = readline.createInterface({ input, output });
console.log(`A number from ${minNumber} to ${maxNumber} has been guessed`)

rl.setPrompt('Enter a number> ');
rl.prompt();

rl.on('line', (line) => {
    +line == randomNumber ? rl.close(line) 
        : +line > randomNumber ? console.log("The number is less") : console.log("The number is greater")
    rl.prompt();
}).on('close', () => {
    console.log(`You guessed the number! (${randomNumber})`);
    process.exit(0);
});
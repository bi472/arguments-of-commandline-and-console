#!/usr/bin/env node
date = new Date();
function addYear(number) {
    date.setFullYear(date.getFullYear() + number);
    return date;
}

function addMonth(number) {
    date.setMonth(date.getMonth() + number);
    return date;
}

function addDay(number) {
    date.setDate(date.getDate() + number);
    return date;
}
  
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
    .option('year',{
        alias: 'y',
        description: 'add value to year',
        type: "number"
    })
    .option('month',{
        alias: 'm',
        description: 'add value to month'
    })
    .option('date',{
        alias: 'd',
        description: 'add value to date'
    })
    .argv

argv.year ? console.log(addYear(argv.year)) 
    : argv.month ? console.log(addMonth(argv.month))
        : argv.date ? console.log(addDay(argv.date))
            : console.log("Unknown option")

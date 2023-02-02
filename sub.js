#!/usr/bin/env node

date = new Date();
function subYear(number) {
    date.setFullYear(date.getFullYear() - number);
    return date;
}

function subMonth(number) {
    date.setMonth(date.getMonth() - number);
    return date;
}

function subDay(number) {
    date.setDate(date.getDate() - number);
    return date;
}
  
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
    .option('year',{
        alias: 'y',
        description: 'sub value from year',
        type: "number"
    })
    .option('month',{
        alias: 'm',
        description: 'sub value from month'
    })
    .option('date',{
        alias: 'd',
        description: 'sub value from date'
    })
    .argv

argv.year ? console.log(subYear(argv.year)) 
    : argv.month ? console.log(subMonth(argv.month))
        : argv.date ? console.log(subDay(argv.date))
            : console.log("Unknown option")

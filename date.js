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
    .scriptName("date_util")
    .usage('$0 <cmd> [option] [value]')
    .example('$0 current',
    `Returns today's date in UTC.`)
    .example('$0 current -m',
    `Returns today's month.`)
    .example('$0 add -m 2',
    `Returns today's date, where month + 2.`)
    .example('$0 sub -m 2',
    `Returns today's date, where month - 2.`)
    .command('current', 'current date(year, month, day) in UTC', () => {}, (argv) => {
        argv.year ? console.log('Current year: ' + new Date().getFullYear()) 
            : argv.month ? console.log("Current month: " + (new Date().getUTCMonth() + 1) )
                : argv.date ? console.log("Current day: " + new Date().getUTCDate())
                    : console.log(new Date())
    })
    .command('add', 'add to current date value (value is required)', () => {}, (argv) => {
        argv.year ? console.log(addYear(argv.year)) 
            : argv.month ? console.log(addMonth(argv.month))
                : argv.date ? console.log(addDay(argv.date))
                    : console.log("Unknown option")

    })
    .command('sub', 'sub value from date (value is required)', () => {}, (argv) => {
        argv.year ? console.log(addYear(-argv.year)) 
            : argv.month ? console.log(addMonth(-argv.month))
                : argv.date ? console.log(addDay(-argv.date))
                    : console.log("Unknown option")

    })
    .option('year',{
        alias: 'y',
        description: 'year',
        type: 'number'
    })
    .option('month',{
        alias: 'm',
        description: 'month',
        type: 'number'
    })
    .option('date',{
        alias: 'd',
        description: 'date',
        type: 'number'
    })
    .argv

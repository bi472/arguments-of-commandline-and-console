#!/usr/bin/env node
date = new Date();

function pretty

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
    .command('current', 'current date(year, month, day) in UTC', () => {}, (argv) => {
        argv.year ? console.log("Current year: " + new Date().getFullYear()) 
            : argv.month ? console.log("Current month: " + (new Date().getUTCMonth() + 1) )
                : argv.date ? console.log("Current day: " + new Date().getUTCDate())
                    : console.log(new Date())
      })
    .command('add', 'current date(year, month, day) in UTC', () => {}, (argv) => {
        argv.year ? console.log(new Date().getFullYear()) 
            : argv.month ? console.log("Current month: " + (new Date().getUTCMonth() + 1) )
                : argv.date ? console.log("Current day: " + new Date().getUTCDate())
                    : console.log(new Date())
      })
    .option('year',{
        alias: 'y',
        description: 'year'
    })
    .option('month',{
        alias: 'm',
        description: 'month'
    })
    .option('date',{
        alias: 'd',
        description: 'date'
    })
    .argv

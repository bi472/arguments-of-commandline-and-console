#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
    .option('year',{
        alias: 'y',
        description: 'current year'
    })
    .option('month',{
        alias: 'm',
        description: 'current month'
    })
    .option('date',{
        alias: 'd',
        description: 'current date'
    })
    .argv


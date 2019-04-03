const argv = require('yargs').argv
const chalk = require('chalk')

console.log(chalk.red.inverse("Arquivo:") + " " + chalk.white(argv.logfile))
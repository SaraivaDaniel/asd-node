const log = require('./log');

console.log(process.argv);

log.writeLog(process.argv[2]);
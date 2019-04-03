const fs = require('fs');
const logFile = './log.log';

const writeLog = (msg) => {
    const line = (new Date()).toISOString() + " => " + msg + "\n";

    fs.appendFile(logFile, line, (err) => {
        if (err) {
            throw err;
        };

        console.log("Mensagem gravada no log com sucesso");
    });

};

module.exports = {
    writeLog
};
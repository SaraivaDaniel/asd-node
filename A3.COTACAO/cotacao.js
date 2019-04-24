const request = require('request');
const chalk = require('chalk');

let url = 'https://www.worldtradingdata.com/api/v1/stock?symbol={$symbol}&api_token=sumuJClpD4o1gvZ6o2Fjil4JpzDfx4XHuQvKT4DpIJj7PLterccfDUlUy024';

const cotacao = function(ativo) {
    let url_ativo = url.replace('{$symbol}', ativo);

    request({
        'url': url_ativo,
        'json': true
    }, (err, response) => {
        if (err) {
            console.log(chalk.red('Erro ao realizar pesquisa: ' + err));
            return;
        }

        console.log(chalk.blue.bold('Valor Fechamento: ') + chalk.gray(response.body.data[0].price));
        console.log(chalk.blue.bold('Menor Valor: ') + chalk.gray(response.body.data[0].day_low));
        console.log(chalk.blue.bold('Maior Valor: ') + chalk.gray(response.body.data[0].day_high));
        //console.log(chalk.blue.bold('Valor Fechamento: ') + chalk.gray(response.body.data[0].price));

    });
};

module.exports = {
    cotacao
};
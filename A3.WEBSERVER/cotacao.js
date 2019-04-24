const request = require('request');

let url = 'https://www.worldtradingdata.com/api/v1/stock?symbol={$symbol}&api_token=sumuJClpD4o1gvZ6o2Fjil4JpzDfx4XHuQvKT4DpIJj7PLterccfDUlUy024';

const cotacao = function(ativo, callback) {
    let url_ativo = url.replace('{$symbol}', ativo);

    request({
        'url': url_ativo,
        'json': true
    }, (err, response) => {
        if (err) {
            console.log('Erro ao realizar pesquisa: ' + err);
            callback(null)
            return
        }

        callback(response.body.data[0])
    });
};

const cotacaoPromise = function(ativo, callback) {
    let url_ativo = url.replace('{$symbol}', ativo);

    return new Promise((resolve, reject) => {
        request({
            'url': url_ativo,
            'json': true
        }, (err, response) => {
            if (err) {
                reject(err)
            } else {
                console.log(response.body);
                if (response.body.Message !== undefined) {
                    reject(response.body.Message)
                    return
                }

                resolve(response.body.data[0])
            }
        });
    })
  
};

module.exports = {
    cotacao,
    cotacaoPromise
};
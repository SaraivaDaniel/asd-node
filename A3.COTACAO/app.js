#!/usr/bin/env node

const yargs = require('yargs');
const cotacao = require('./cotacao');

const argv = yargs
    .usage('Usage: $0 <command> [options]')
    .command({
        command: 'cotacao',
        describe: 'informações sobre cotação atual de um ativo',
        builder: {
            ativo: {
                describe: 'Nome do ativo pesquisado',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            cotacao.cotacao(argv.ativo);
        }
    })
    .help()
    .argv;





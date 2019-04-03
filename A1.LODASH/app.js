const _ = require('lodash');

const arrayoriginal = [1,2,3,4,5,6];

const novoarray = _.chunk(arrayoriginal, 3);
console.log(novoarray);
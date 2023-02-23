const fs = require('fs');

const readText = fs.readFileSync('./sample.txt', 'utf-8');
console.log(readText);
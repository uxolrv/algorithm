const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

const sum = input.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
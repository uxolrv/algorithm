const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input[0])
let sum = 0;

for (let i = 0; i < n; i++) {
    sum = sum + parseInt(input[1][i])
}

console.log(sum)
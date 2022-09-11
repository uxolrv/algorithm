const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

for (let numbers of input) {
    let a = parseInt(numbers.split(' ')[0])
    let b = parseInt(numbers.split(' ')[1])
    console.log(a + b)
}
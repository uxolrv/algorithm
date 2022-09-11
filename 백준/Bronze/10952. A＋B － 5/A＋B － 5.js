const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');

for (let numbers of input) {
    let a = parseInt(numbers.split(' ')[0])
    let b = parseInt(numbers.split(' ')[1])
    if (a + b === 0) {
        break;
    } else {
        console.log(a + b)
    }
}

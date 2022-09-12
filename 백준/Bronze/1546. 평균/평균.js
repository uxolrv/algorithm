const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const subject = parseInt(input[0])
const scores = input[1].split(' ').map(score => parseInt(score))
const maxScore = Math.max(...scores)
let sum = 0;

for (let score of scores) {
    sum = sum + (score / maxScore * 100)
}

sum = sum / subject

console.log(sum)

const input = require('fs').readFileSync("/dev/stdin").toString();

const n = Number(input)
let stars = '*'

for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + stars)
    stars = stars + '*' 
}
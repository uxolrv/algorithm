const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

let arr = input.map(el => parseInt(el))

const max = Math.max(...arr)
const maxIdx = arr.indexOf(max)

console.log(`${max}\n${maxIdx+1}`)

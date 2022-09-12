const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

let arr = input[1].split(' ') // 공백을 기준으로 숫자들을 나눈다.
arr = arr.map(el => parseInt(el)) // string타입의 숫자들을 number타입으로 변경

const max = Math.max(...arr)
const min = Math.min(...arr)

console.log(`${min} ${max}`)
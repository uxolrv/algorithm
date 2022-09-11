const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');

// input[0] 테스트 케이스 개수

let result = 0;

for (let i = 1; i <= Number(input[0]); i++) {
    let items = input[i].split(' ')
    let sum = Number(items[0]) + Number(items[1])
    console.log(`Case #${i}: ${Number(items[0])} + ${Number(items[1])} = ${sum}`)
}

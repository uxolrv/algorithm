const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');

// 정수 n개로 이루어진 수열 a에서 정수 x보다 작은 수를 모두 출력

const n = Number(input[0].split(' ')[0]) // 수열의 길이
const x = Number(input[0].split(' ')[1]) // 비교 대상
const num = input[1].split(' ') // 수열의 요소
let result = '';

for (let i = 0; i <= n; i++) {
    if (num[i] < x) {
        result = result + num[i] + ' '
    }
}
console.log(result.slice(0, -1))
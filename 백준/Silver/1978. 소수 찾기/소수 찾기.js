const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')

const casesNum = parseInt(input[0])
const nums = input[1].split(' ').map(el => parseInt(el))

// 전체 수 개수를 count에 담아준다.
let count = nums.length;

for (let num of nums) {
    // 소수가 아닌 경우 count - 1
    if (num < 2) {
        count--
        continue;
    }
    for (let j = 2; j <= num - 1; j++) {
        if (num % j === 0) {
            count--
            break;
        }
    }
}

console.log(count)

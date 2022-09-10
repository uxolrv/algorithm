const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');

// input[0] 총 금액
// input[1] 구매한 물건의 종류의 수
// input[i] "물건가격 개수"

let sum = 0;

for (let i = 2; i <= parseInt(input[1]) + 1; i++) {
    let items = input[i].split(' ')
    sum = sum + parseInt(items[0]) * parseInt(items[1])
}

if (sum === parseInt(input[0])) {
    console.log("Yes")
} else {
    console.log("No")
}
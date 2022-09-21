const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ');

const fixedCost = parseInt(input[0]) // 고정 비용
const VariableCost = parseInt(input[1]) // 가변 비용
const price = parseInt(input[2]) // 노트북 가격

// fixedCost + VariableCost * i = price * i
// fixedCost = price * i - VariableCost * i
// fixedCost = (price - VariableCost) * i
// fixedCost / (price - VariableCost) = i    ==> 이때 수익과 비용 일치

// 가변 비용이 노트북 가격보다 크거나 같으면 마진과 비용의 격차를 줄일 수 없음
if (VariableCost >= price) {
    console.log(-1)
} else {
    // 수익과 비용이 일치할 때는 손익분기점이 아니기 때문에 +1
    console.log(Math.floor(fixedCost / (price - VariableCost)) + 1)
}


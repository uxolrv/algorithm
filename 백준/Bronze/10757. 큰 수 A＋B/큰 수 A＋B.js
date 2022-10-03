const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ')

// BigInt: Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53-1 보다 큰 정수를 표현할 수 있는 내장 객체
// 정수 뒤에 n을 붙이거나 BigInt를 호출해 사용
// 연산에서 Number와 혼합해 사용할 수 없음!
// .toString() ===> string타입으로 반환하여 출력 (맨 끝의 n 제거)

console.log((BigInt(input[0]) + BigInt(input[1])).toString())
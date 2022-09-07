let input = require('fs').readFileSync("/dev/stdin").toString().split(' ');

// 윤년 => 4의 배수 && !100의 배수 || 400의 배수
const year = parseInt(input[0]);

if (year % 4 === 0 && !(year % 100 === 0) || year % 400 === 0) {
    console.log("1")
} else {
    console.log("0")
}

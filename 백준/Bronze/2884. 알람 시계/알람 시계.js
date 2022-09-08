const fs = require('fs');
var input = require('fs').readFileSync("/dev/stdin").toString().split(' ');

let hour = parseInt(input[0]);
let min = parseInt(input[1]);

// 0시를 24시로 표기
if (hour === 0 && min - 45 < 0) {
    hour = 24
}

const TotalMin = hour * 60 + min

hour = Math.floor((TotalMin - 45) / 60)
min = (TotalMin - 45) % 60

console.log(hour, min)
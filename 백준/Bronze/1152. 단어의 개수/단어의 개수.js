const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ');

// input이 공백일 때
if (input[0] === '') {
    console.log('0')
} else {
    console.log(input.length)
}
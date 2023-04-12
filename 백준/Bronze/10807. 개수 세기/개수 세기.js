const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const nums = input[1].split(' ');
const findNum = input[2];

console.log(nums.filter((num) => num === findNum).length);
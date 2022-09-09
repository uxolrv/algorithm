var input = require('fs').readFileSync("/dev/stdin").toString().split(' ');

const spotA = parseInt(input[0]);
const spotB = parseInt(input[1]);
const spotC = parseInt(input[2]);

// 3개 일치 : 10000 + (같은눈) * 1000
// 2개 일치 : 1000 + (같은눈) * 100   (A = B, A = C, B = C)
// 전부 다름 : (가장큰눈) * 100

if (spotA === spotB && spotA === spotC) {
    console.log(`${10000 + spotA * 1000}`)
} else if (spotA === spotB || spotA === spotC) {
    console.log(`${1000 + spotA * 100}`)
} else if (spotB === spotC) {
    console.log(`${1000 + spotB * 100}`)
} else {
    const max = Math.max(spotA, spotB, spotC)
    console.log(max * 100)
}
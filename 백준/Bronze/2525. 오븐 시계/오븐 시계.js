var input = require('fs').readFileSync("/dev/stdin").toString().split(' ');
var time = parseInt(require('fs').readFileSync("/dev/stdin").toString().split('\n')[1]);

let hour = parseInt(input[0]);
let min = parseInt(input[1]);

// min + time이 120이상이라면 hour + 2, 180이상이라면 hour + 3 ...
if (min + time >= 60) {
    hour = hour + Math.floor((min + time)/60)
    min = min + time - (60 * Math.floor((min + time)/60))
} else {
    min = min + time
}

if (hour >= 24) {
    hour = hour - 24
}

console.log(`${hour} ${min}`)
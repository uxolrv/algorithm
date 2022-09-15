const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ');

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let output = '';

for (let i = 0; i < alphabet.length; i++) {
    output = output + `${input[0].indexOf(alphabet[i])} `
}
console.log(output.slice(0, -1))
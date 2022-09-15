const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const testCaseNum = Number(input[0])

for (let i = 1; i <= testCaseNum; i++) {
    const condition = input[i].split(' ')
    const repeatNum = Number(condition[0])
    const repeatLetter = condition[1]
    let output = ''

    for (let j = 0; j < repeatLetter.length; j++) {
        output = output + Array(repeatNum + 1).join(repeatLetter[j])
    }
    console.log(output)
}
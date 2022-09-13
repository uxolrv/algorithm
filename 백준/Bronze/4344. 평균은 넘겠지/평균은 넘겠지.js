const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const testCaseNum = parseInt(input[0])

for (let i = 1; i <= testCaseNum; i++) {
    let scores = input[i].split(' ').map(score => parseInt(score))
    let students = scores[0]
    let average = (scores.reduce((acc, cur) => acc + cur, 0) - students) / students
    let count = 0;

    for (let j = 1; j <= students; j++) {
        if (scores[j] > average) {
            count++
        }
    }
    console.log(`${(count/students*100).toFixed(3)}%`)
}

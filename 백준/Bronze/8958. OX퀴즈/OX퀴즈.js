const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
const testCaseNum = parseInt(input[0])

for (let i = 1; i <= testCaseNum; i++) { // 테스트 케이스를 loop
    let oNum = 0;
    let score = 0;

    for (let j = 0; j < input[i].length; j++) { // ox로 이루어진 문자열을 loop
        if (input[i][j] === 'O') {
            oNum++
            score = score + 1 * oNum
        } else {
            oNum = 0
        }
    }
    console.log(score)
}
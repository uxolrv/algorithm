const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ');

let up = parseInt(input[0])
let down = parseInt(input[1])
let height = parseInt(input[2])

// 정상에 오르지 않았다면 하루에 up-down 만큼 움직임
// 정상에 오르고 나면 다시 떨어지지 않음
// ===> 정상 오르기 전 날까진 up-down 만큼 움직임

// 높이 - 오르는 길이 / up-down  ===> 정상 오르기 전 날까지 며칠 걸리는 지
// 만약 소수가 나온다면 올림 처리
const yesterday =  Math.ceil((height - up) / (up - down))

console.log(yesterday + 1)
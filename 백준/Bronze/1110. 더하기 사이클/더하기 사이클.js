const input = parseInt(require('fs').readFileSync("/dev/stdin").toString().trim());

let num = input;
let count = 0;
let sum = 0;

while (true) {
    count++
    // sum = num의 왼쪽 수 + 오른쪽 수
    sum = Math.floor(num / 10) + num % 10;
    // num의 오른쪽 수를 10의 자리로 + sum의 오른쪽 수를 1의 자리로
    num = (num % 10) * 10 + sum % 10
    // 새로운 수가 처음과 같아지면 종료
    if (num === input) {
        break;
    }
}

console.log(count)
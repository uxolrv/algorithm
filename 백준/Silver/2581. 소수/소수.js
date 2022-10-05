const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n')
const m = parseInt(input[0])
const n = parseInt(input[1])

// 소수의 최솟값
let firstPrimeNum = 0;

// 소수의 합계
let sum = 0;

// m~n사이의 수를 뽑아낸다
for (let i = m; i <= n; i++) {

    // 소수가 아니라면 false로 바꿔 줄 변수
    let isPrimeNum = true;

    // 1이하는 소수가 아님
    if(i < 2) {
        continue;
    }

    for (let j = 2; j <= i-1; j++) {
        if (i % j === 0) {
            isPrimeNum = false; // 소수 아님
            break;
        }
    }
    
    // 소수라면
    if (isPrimeNum) {
        // 아직 최소값이 0이라면, i를 최솟값에 할당
        if (firstPrimeNum === 0) {
            firstPrimeNum = i
        }
        sum += i
    }
}

if (firstPrimeNum === 0) {
    console.log(-1)
} else {
    console.log(`${sum}\n${firstPrimeNum}`)
}

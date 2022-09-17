const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ');

// input의 수를 하나씩 쪼갠다
let splitedA = input[0].split('')
let splitedB = input[1].split('')

// 뒤집은 수를 담아줄 배열
let a = [];
let b = [];

// splitedA/B 배열의 끝부터 하나씩 꺼내서 a/b에 담아준다
for (let i = 0; i < input[0].length; i++) {
    a.push(splitedA.pop())
    b.push(splitedB.pop())
}

// 나눠준 수들을 하나로 합쳐 더 큰 수를 출력한다
if (Number(a.join('')) > Number(b.join(''))) {
    console.log(Number(a.join('')))
} else {
    console.log(Number(b.join('')))
}

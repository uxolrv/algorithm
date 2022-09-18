const input = require('fs').readFileSync("/dev/stdin").toString().trim();

// 크로아티아 알파벳: 'c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='

let count = 0;

// 크로아티아 알파벳에 해당하는 경우 count에 개수를 더하고,
// i++을 하여 크로아티아 알파벳 다음 문자부터 다시 반복한다.
for (let i = 0; i < input.length; i++) {

    // 문자 2개로 이루어진 크로아티아 알파벳인 경우
    if ((input[i] === 'c' && input[i+1] === '=')
     || (input[i] === 'c' && input[i+1] === '-')
     || (input[i] === 'd' && input[i+1] === '-')
     || (input[i] === 'l' && input[i+1] === 'j')
     || (input[i] === 'n' && input[i+1] === 'j')
     || (input[i] === 's' && input[i+1] === '=')
     || (input[i] === 'z' && input[i+1] === '=')
    ) {
        count++
        i++

    // 문자 3개로 이루어진 크로아티아 알파벳인 경우 ('dz=')
    } else if (input[i] === 'd' && input[i+1] === 'z' && input[i+2] === '=') {
        count++
        i = i + 2

    // 크로아티아 알파벳이 아닌 경우
    } else {
        count++
    }
}

console.log(count)
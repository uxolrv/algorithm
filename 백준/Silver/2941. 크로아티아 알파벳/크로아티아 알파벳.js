const input = require('fs').readFileSync("/dev/stdin").toString().trim();

// 크로아티아 알파벳: 'c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='

let count = 0;

// 크로아티아 알파벳에 해당하는 경우 count에 개수를 더하고,
// i++을 하여 크로아티아 알파벳 다음 문자부터 다시 반복한다.
for (let i = 0; i < input.length; i++) {
    // 'c=', 'c-' 인 경우
    if (input[i] === 'c') {
        if (input[i+1] === '=' || input[i+1] === '-') {
            count++
            i++
        } else {
            count++
        }
    // 'dz=', 'd-' 인 경우
    } else if (input[i] === 'd') {
        if (input[i+1] === '-' ) {
            count++
            i++
        } else if (input[i+1] === 'z' && input[i+2] === '=') {
            count++
            i = i + 2
        } else {
            count++
        }
    // 'lj' 인 경우
    } else if (input[i] === 'l') {
        if (input[i+1] === 'j') {
            count++
            i++
        } else {
            count++
        }
    // 'nj' 인 경우
    } else if (input[i] === 'n') {
        if (input[i+1] === 'j') {
            count++
            i++
        } else {
            count++
        }
    // 's=' 인 경우
    } else if (input[i] === 's') {
        if (input[i+1] === '=') {
            count++
            i++
        } else {
            count++
        }
    // 'z=' 인 경우
    } else if (input[i] === 'z') {
        if (input[i+1] === '=') {
            count++
            i++
        } else {
            count++
        }
    // 크로아티아 알파벳에 해당하지 않는 경우
    } else {
        count++
    }
}

console.log(count)
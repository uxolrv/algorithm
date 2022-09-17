const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('');

// 숫자에 해당하는 문자를 담은 배열, 이때 0번째는 해당 숫자를 누르는데 걸리는 시간
let two = [3, 'A', 'B', 'C']
let three = [4, 'D', 'E', 'F']
let four = [5, 'G', 'H', 'I']
let five = [6, 'J', 'K', 'L']
let six = [7, 'M', 'N', 'O']
let seven = [8, 'P', 'Q', 'R', 'S']
let eight = [9, 'T', 'U', 'V']
let nine = [10, 'W', 'X', 'Y', 'Z']

let time = 0;

// 문자가 해당하는 배열을 찾아 시간에 더해준다
for (let letter of input) {
    if (two.includes(letter)) {
        time = time + two[0]
    }
    else if (three.includes(letter)) {
        time = time + three[0]
    }
    else if (four.includes(letter)) {
        time = time + four[0]
    }
    else if (five.includes(letter)) {
        time = time + five[0]
    }
    else if (six.includes(letter)) {
        time = time + six[0]
    }
    else if (seven.includes(letter)) {
        time = time + seven[0]
    }
    else if (eight.includes(letter)) {
        time = time + eight[0]
    }
    else if (nine.includes(letter)) {
        time = time + nine[0]
    }
}

console.log(time)

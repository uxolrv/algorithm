const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ');

// 문자열을 하나의 알파벳으로 나눠서 배열에 담아준다
const letters = input[0].toUpperCase().split('')

// 만약 input이 1개라면 바로 출력
if (letters.length === 1) {
    console.log(letters[0])
} else {
    let previousLetters = []
    let LettersNum = {};

    // 알파벳은 key로, 개수는 value로 담아준다
    for (let letter of letters) {
        if (!previousLetters.includes(letter)) {
            LettersNum[letter] = 1
            previousLetters.push(letter)
        } else {
            LettersNum[letter] = LettersNum[letter] + 1
        }
    }

    // 가장 큰 수를 찾는다
    let max = Math.max(...Object.values(LettersNum))

    // 개수가 똑같은 알파벳을 담아 줄 배열 overlap
    let overlap = []
    
    // 가장 많이 사용된 알파벳들을 찾는 반복문
    for(let key in LettersNum) {
        if (LettersNum[key] === max) {
            overlap.push(key)
        }
    }
    // 만약 찾아낸 알파벳이 1개보다 많다면 ? 출력
    if (overlap.length > 1) {
        console.log('?')
    } else {
        console.log(overlap[0])
    }
}

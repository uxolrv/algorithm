const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const n = input.shift()
let groupWords = [];

for (let word of input) {

    // 돌고 난 단어들을 담아 줄 배열
    let alphabet = [];

    // 단어의 알파벳을 돌며 그룹단어인지 확인
    for (let i = 0; i < word.length; i++) {

        // words[i]가 alphabet에 이미 있음 && alphabet의 마지막 인덱스가 word[i]가 아님 => 그룹 단어가 아님
        if (alphabet.includes(word[i]) && alphabet[alphabet.length - 1] !== word[i]) {
            // 그룹단어가 아님을 확인했으므로 alphabet에 담았던 알파벳들은 필요 없어짐
            alphabet = [];
            break;

        // 그룹단어로 추정되는 경우 alphabet에 담아준다
        } else {
            alphabet.push(word[i])
        }
    }
    
    // 만약 alphabet이 빈배열이 아니라면, 그룹단어!
    // 현재 온전한 단어가 아닌 각 알파벳으로 떨어져 있는 상태이므로 join 해서 groupWords에 담아준다
    if (alphabet.length > 0) {
        groupWords.push(alphabet.join(''))
    }
}

console.log(groupWords.length)


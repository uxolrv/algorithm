const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

const casesNum = input.shift();

for (let data of input) {
    data = data.split(' ')
    const floor = data[0]
    const room = data[1]
    const guest = data[2]

    let frontNum = 0;
    let backNum = Math.ceil(guest/floor);

    // 만약 guest / floor의 나머지가 0이라면 frontNum은 floor
    if (guest % floor === 0) {
        frontNum = floor
    } else {
        frontNum = guest % floor
    }

    // 만약 backNum이 한자리 수라면 앞에 0 추가
    if (backNum < 10) {
        console.log(`${frontNum}0${backNum}`)
    } else {
        console.log(`${frontNum}${backNum}`)
    }
}
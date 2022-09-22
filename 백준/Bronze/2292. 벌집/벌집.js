const input = parseInt(require('fs').readFileSync("/dev/stdin").toString().trim().split(' '));

// 1개의 방을 지나는 경우: 1
// 2개의 방을 지나는 경우: 2~7    (6개 증가)
// 3개의 방을 지나는 경우: 8~19   (12개 증가)
// 4개의 방을 지나는 경우: 20~37  (18개 증가)

// 범위의 최대값
let maxRange = 1
// 방 개수
let room = 1;

while (true) {
    
    // 만약 input이 이번 범위 안에 포함되면 방 개수를 찾은 것
    if (input <= maxRange) {
        console.log(room)
        break;
    }

    // 다음 범위 찾기
    maxRange += 6 * room
    
    room++
}
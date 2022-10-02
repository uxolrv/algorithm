const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(el => parseInt(el));

const casesNum = input.shift();

// 테스트 케이스를 돌리는 반복문
for (let i = 0; i < casesNum; i++) {
    
    const floor = input.shift();
    const room = input.shift();
    
    // 현재 층 거주민 수    
    let residents = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    // 저번 층 거주민 수
    let before = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    // 층을 반복
    for (let j = 1; j <= floor; j++) {
        let acc = 0; // 누적 값

        // 호수 하나하나에 거주민 수 입력
        for (let k = 1; k <= room; k++) {
            acc += before[k]
            residents[k] = acc
        }
        
        // 한 층에 거주민 수를 전부 구하고 나면 이번 층이 before가 됨
        before = residents
    }

    console.log(residents[room])
}

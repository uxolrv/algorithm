const input = require('fs').readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input)

// 1~99는 전부 한수이므로 n이 99이하인 경우 바로 출력
if (n <= 99) {
    console.log(n)

  // n이 100이상인 경우
} else {
    let from100toN = []
    let result = []

    // 1~99 까지는 한수이므로 result에 담아준다.
    for (let i = 1; i <= 99; i++) {
        result.push(i)
    }

    // 100부터 n까지의 숫자를 담은 from100toN
    for (let i = 100; i <= n; i++) {
        from100toN.push(i)
    }

    // from100toN의 한 요소를, 숫자 하나씩 쪼개서 배열 splitedNum에 담아준다
    for(let num of from100toN) {
        let splitedNum = String(num).split('').map(el => parseInt(el))
        // let splitedNum = [1, 0, 0, 0]
        
        // 입력값은 1000과 같거나 작고 1000은 한수가 아니므로, 1000은 무시
         if (splitedNum.length === 3) {
            if(splitedNum[0] - splitedNum[1] === splitedNum[1] - splitedNum[2]) {
                result.push(splitedNum.join('')) // string 타입 
            }
        }     
    }
    console.log(result.length)
}

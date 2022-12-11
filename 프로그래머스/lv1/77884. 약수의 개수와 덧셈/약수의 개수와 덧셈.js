function solution(left, right) {
    let result = 0;
    // 자기 자신은 무조건 약수
    let count = 1; 

    // left부터 right까지의 수를 돈다
    for (let i = left; i <= right; i++) {
        // 약수를 발견하면 count + 1
        for (let j = 1; j <= i/2; j++) {
          if (i % j === 0) {
            count++
          }
        }
      // count가 짝수면 i를 더하고, 홀수면 i를 뺀다
      if (count % 2 === 0) {
        result += i
      } else {
        result -= i
      }
      // count 초기화 후, 다음 수 탐색
      count = 1;
    }
    
  return result
}

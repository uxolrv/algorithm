function solution(left, right) {
    let result = 0;

    for (let i = left; i <= right; i++) {
        let count = 1; // 자기 자신은 무조건 약수

        for (let j = 1; j <= i/2; j++) {
          if (i % j === 0) {
            count++
          }
        }

      if (count % 2 === 0) {
        result += i
      } else {
        result -= i
      }
    }
    
  return result
}

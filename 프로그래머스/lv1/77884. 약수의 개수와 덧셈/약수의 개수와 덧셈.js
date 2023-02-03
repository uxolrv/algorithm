function solution(left, right) {
  const leftToRight = [...Array(right - left + 1)].map((el, i) => (el = i + left));
  let sum = 0;

  for (let num of leftToRight) {
    let count = 0;

    for (let j = 1; j * j <= num; j++) {
      if (num % j === 0) {
        count++;
        if (num / j !== j) {
          count++;
        }
      }
    }

    sum += count % 2 === 0 ? num : -num;
  }

  return sum;
}

function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;

    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        count++;
        if (i / j !== j) {
          count++;
        }
      }
    }

    sum += count % 2 === 0 ? i : -i;
  }

  return sum;
}
function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    let count = 1;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) count++;
    }
    sum += count % 2 === 0 ? i : -i;
  }
  return sum;
}

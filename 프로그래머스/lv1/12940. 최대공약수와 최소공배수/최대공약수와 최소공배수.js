function solution(n, m) {
  const nums = [n, m].sort((a, b) => a - b);
  const result = [];

  for (let i = nums[0]; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      result[0] = i;
      break;
    }
  }

  for (let i = nums[1]; i <= n * m; i++) {
    if (i % n === 0 && i % m === 0) {
      result[1] = i;
      break;
    }
  }

  return result;
}

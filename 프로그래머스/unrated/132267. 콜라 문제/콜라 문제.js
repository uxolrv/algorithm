function solution(a, b, n) {
  let count = 0;
  let change = 0;

  while (n >= a) {
    change = ~~(n / a) * b;
    count += change;
    n = (n % a) + change;
  }

  return count;
}

function solution(n) {
  let battery = 0;

  while (n !== 0) {
    if (Number.isInteger(n / 2)) {
      n /= 2;
    } else {
      n -= 1;
      battery++;
    }
  }

  return battery;
}
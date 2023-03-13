function solution(slice, n) {
  let count = 0;

  while(n > 0) {
    n -= slice;
    count++;
  }

  return count;
}
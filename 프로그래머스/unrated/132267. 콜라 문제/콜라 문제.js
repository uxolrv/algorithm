function trade(a, b, empty, count) {
  // 남은 병이 a보다 작으면 더이상 교환 불가
  if (empty < a) {
    return count;
  }
  // 교환한 병의 개수
  const changed = b * Math.floor(empty / a)
  empty = changed + (empty % a);
  count += changed;
  
  return trade(a, b, empty, count);
}


function solution(a, b, n) {
  let count = 0;
  return trade(a, b, n, count);
}
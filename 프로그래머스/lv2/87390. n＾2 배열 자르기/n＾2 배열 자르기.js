function solution(n, left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    // x좌표와 y좌표 중 큰 수 + 1이 해당 좌표의 번호
    // x좌표 => Math.floor(i / n),  y좌표 => i % n
    result.push(Math.max(~~(i / n), i % n) + 1);
  }

  return result;
}
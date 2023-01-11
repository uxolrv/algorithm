function solution(x, n) {
  // n만큼의 길이를 갖는 배열 생성 후, fill()로 각 자리에 undefined 할당
  return Array(n).fill().map((_, i) => (i + 1) * x);
}
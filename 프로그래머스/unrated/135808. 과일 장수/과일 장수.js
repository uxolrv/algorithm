function solution(k, m, score) {
  let profit = 0;
  let start = 0;
  score.sort((a, b) => b - a);

  while (start <= score.length - m) {
    profit += score[start + m - 1] * m;
    start += m;
  }

  return profit;
}

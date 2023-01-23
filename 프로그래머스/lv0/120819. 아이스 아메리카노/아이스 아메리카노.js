function solution(money) {
  let answer = [0, money];
  while (answer[1] >= 5500) {
    answer[1] -= 5500;
    answer[0]++;
  }
  return answer;
}
function solution(babbling) {
  // (?!.*(aya|ye|woo|ma)\1) => aya, ye, woo, ma 중 어떤 문자든 2번 이상 반복되지 않아야 한다.
  // ^(aya|ye|woo|ma)$ => aya, ye, woo, ma 중 하나로 시작하고, 끝나야 한다
  const regExp = /^(?!.*(aya|ye|woo|ma)\1)(aya|ye|woo|ma)+$/;
  let count = 0;

  for (let word of babbling) {
    if (regExp.test(word)) count++;
  }

  return count;
}

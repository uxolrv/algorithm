function solution(s) {
  const regex = /\D/g; // 숫자가 아닌 모든 문자
  return ![4, 6].includes(s.length) ? false : !regex.test(s);
}
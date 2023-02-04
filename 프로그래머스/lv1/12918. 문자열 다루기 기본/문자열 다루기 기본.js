function solution(s) {
  const regex = /[^0-9]/g;
  return ![4, 6].includes(s.length) ? false : !regex.test(s);
}

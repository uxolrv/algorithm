function solution(s) {
  return [...s]
    .filter((el, i, arr) => arr.indexOf(el) === i && arr.lastIndexOf(el) === i)
    .sort()
    .join('');
}
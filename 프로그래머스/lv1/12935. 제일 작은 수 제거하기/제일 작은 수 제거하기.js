function solution(arr) {
  const minIdx = arr.indexOf(Math.min(...arr));
  arr.splice(minIdx, 1);

  return arr.length ? arr : [-1];
}
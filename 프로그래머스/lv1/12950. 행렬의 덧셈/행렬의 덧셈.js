function solution(arr1, arr2) {
  const result = arr1.map((arr, i) => arr.map((num, j) => num + arr2[i][j]));

  return result;
}

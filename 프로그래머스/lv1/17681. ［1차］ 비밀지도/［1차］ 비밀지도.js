function solution(n, arr1, arr2) {
  let result = [];

  arr1 = convertToBinary(arr1, n);
  arr2 = convertToBinary(arr2, n);

  for (let i = 0; i < n; i++) {
    let decode = '';

    for (let j = 0; j < n; j++) {
      decode += arr1[i][j] === '1' || arr2[i][j] === '1' ? '#' : ' ';
    }
    result[i] = decode;
  }

  return result;
}

function convertToBinary(arr, n) {
  return arr.map((num) => num.toString(2).padStart(n, '0'));
}
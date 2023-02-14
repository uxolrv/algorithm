// 최소공약수를 구하는 함수
function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}

function solution(arr) {
  let current = arr[0];

  // a와 b의 최소공배수 = a * b / a와 b의 최대공약수
  for (let i = 0; i < arr.length - 1; i++) {
    current *= arr[i + 1] / gcd(current, arr[i + 1]);
  }

  return current;
}

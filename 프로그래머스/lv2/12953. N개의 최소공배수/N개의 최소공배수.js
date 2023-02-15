// 최소공약수를 구하는 함수
function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}

function solution(arr) {
  return arr.reduce((acc, cur) => (acc * cur) / gcd(acc, cur));
}
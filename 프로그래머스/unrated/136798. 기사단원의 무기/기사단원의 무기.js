function solution(number, limit, power) {
  let divisors = [1]; // 1은 약수가 1개 (본인)

  for (let i = 2; i <= number; i++) {
    let count = 1; // i는 자신의 약수

    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) count++;
    }

    divisors.push(count);
  }

  return divisors.reduce((acc, cur) => acc + (cur > limit ? power : cur));
}
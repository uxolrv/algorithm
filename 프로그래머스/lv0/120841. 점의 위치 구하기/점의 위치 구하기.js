function solution(dot) {
  const sign = dot.map((num) => Math.sign(num));

  if (sign[0] === 1) {
    return sign[1] === 1 ? 1 : 4;
  } else {
    return sign[1] === 1 ? 2 : 3;
  }
}

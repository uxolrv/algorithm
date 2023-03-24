function solution(sides) {
  sides.sort((a, b) => b - a);
  const sum = sides.slice(1).reduce((acc, cur) => acc + cur);

  return sum > sides[0] ? 1 : 2;
}
function solution(sizes) {
  sizes.map((size) => size.sort((a, b) => b - a));

  const row = Math.max(...sizes.map((size) => size[0]));
  const column = Math.max(...sizes.map((size) => size[1]));
  return row * column;
}

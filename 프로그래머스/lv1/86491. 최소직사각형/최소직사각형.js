function solution(sizes) {
  const wallet = [0, 0];

  sizes.map((size) => {
    size.sort((a, b) => b - a);
    if (size[0] > wallet[0]) wallet[0] = size[0];
    if (size[1] > wallet[1]) wallet[1] = size[1];
  });

  return wallet[0] * wallet[1];
}
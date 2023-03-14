function solution(k, tangerine) {
  const sizes = [0];

  for (let size of tangerine) {
    if (!sizes[size]) sizes[size] = 1;
    else sizes[size]++;
  }

  sizes.sort((a, b) => b - a);

  for (let i = 0; i < sizes.length; i++) {
    k -= sizes[i];
    if (k <= 0) return i + 1;
  }
}

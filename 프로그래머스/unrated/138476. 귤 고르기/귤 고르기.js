function solution(k, tangerine) {
  const categorizing = {};

  tangerine.map((size) => (categorizing[size] ? categorizing[size]++ : (categorizing[size] = 1)));
  const sizes = Object.entries(categorizing).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sizes.length; i++) {
    k -= sizes[i][1];
    if (k <= 0) return i + 1;
  }
}
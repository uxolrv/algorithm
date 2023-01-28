function solution(s) {
  const halfLen = s.length / 2;

  return s.length % 2 ? s[Math.floor(halfLen)] : s.slice(halfLen - 1, halfLen + 1);
}
function solution(n) {
  const sqrt = Math.sqrt(n);
  
  return sqrt % 1 ? -1 : (sqrt + 1) ** 2;
}
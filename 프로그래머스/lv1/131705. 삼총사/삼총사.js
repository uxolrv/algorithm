function solution(number) {
  let trio = 0;
  const len = number.length;
  
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        number[i] + number[j] + number[k] === 0 && trio++;
      }
    }
  }

  return trio
}

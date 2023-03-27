function solution(numbers) {
  const zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return zeroToNine.reduce((acc, cur) => {
    if (!numbers.includes(cur)) {
      return acc + cur;
    } else return acc;
  });
}
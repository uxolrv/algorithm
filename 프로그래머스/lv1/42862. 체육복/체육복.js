function solution(n, lost, reserve) {
  const lent = [];
  const rest = filtering(reserve, lost);
  lost = filtering(lost, reserve);

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < rest.length; j++) {
      const isLendable = [lost[i] - 1, lost[i] + 1].includes(rest[j]);

      if (isLendable && !lent.includes(rest[j])) {
        lent.push(rest[j]);
        break;
      }
    }
  }

  return n - lost.length + lent.length;
}

function filtering(arr1, arr2) {
  return arr1.filter((num) => !arr2.includes(num)).sort((a, b) => a - b);
}
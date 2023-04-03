function solution(n, lost, reserve) {
  const spare = filtering(reserve, lost);
  const lostStudents = filtering(lost, reserve);
  const lent = []; // 빌려준 체육복

  for (let student of lostStudents) {
    for (let clothes of spare) {
      const isLendable = [student - 1, student + 1].includes(clothes);

      if (isLendable && !lent.includes(clothes)) {
        lent.push(clothes);
        break;
      }
    }
  }

  return n - lostStudents.length + lent.length;
}

function filtering(arr1, arr2) {
  return arr1.filter((num) => !arr2.includes(num)).sort((a, b) => a - b);
}

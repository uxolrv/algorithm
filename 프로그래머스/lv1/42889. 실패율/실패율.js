function solution(N, stages) {
  let result = [];

  for (let i = 1; i <= N; i++) {
    const challengers = stages.filter((el) => el >= i).length;
    const failure = stages.filter((el) => el === i).length;
    const rate = challengers === 0 ? 0 : failure / challengers;

    result.push([i, rate]);
  }

  result.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] === b[1]) return 0;
    else return -1;
  });

  return result.map((el) => el[0]);
}

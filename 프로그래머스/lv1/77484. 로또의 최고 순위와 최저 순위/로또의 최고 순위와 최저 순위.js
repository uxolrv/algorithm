function solution(lottos, win_nums) {
  // ranking의 인덱스는 일치하는 번호 수
  // 인덱스(일치 수)에 해당하는 요소가 등수
  const ranking = [6, 6, 5, 4, 3, 2, 1];
  let correct = 0;
  let zero = 0;

  lottos.forEach((lotto) => {
    if (win_nums.includes(lotto)) correct++;
    else if (lotto === 0) zero++;
  });

  return [ranking[correct + zero], ranking[correct]];
}

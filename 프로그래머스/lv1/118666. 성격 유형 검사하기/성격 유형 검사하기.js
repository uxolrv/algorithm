function solution(survey, choices) {
  let result = '';
  const type = {
    RT: [0, 0],
    CF: [0, 0],
    JM: [0, 0],
    AN: [0, 0],
  };

  choices.forEach((choice, i) => {
    if (choice !== 4) {
      // 점수를 부여할 타겟 찾기!! => chioce가 3과 같거나 작으면 0번째 지표, 아니면 1번째 지표
      const target = choice <= 3 ? survey[i][0] : survey[i][1];
      // type 객체에서 key를 찾기 위해 지표의 이름을 정렬 ("RT"일 수도, "TR"일 수도 있음)
      const key = [...survey[i]].sort().join('');
      // 점수를 부여할 타겟이 key에서 몇 번째인지
      const idx = key.indexOf(target);
      // type 객체에서 지표를 찾아서 점수 부여
      type[key][idx] += choice <= 3 ? (4 - choice) : (choice - 4);
    }
  });

  for (let key in type) {
    result += type[key][0] >= type[key][1] ? key[0] : key[1];
  }

  return result;
}
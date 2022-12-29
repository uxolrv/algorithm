function solution(answers) {
  let result = [];
  const students = [
    { score: 0 }, // dummyData
    { pattern: [1, 2, 3, 4, 5], idx: 0, score: 0 }, // idx => 채점해야 할 pattern idx
    { pattern: [2, 1, 2, 3, 2, 4, 2, 5], idx: 0, score: 0 },
    { pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], idx: 0, score: 0 },
  ];

  for (answer of answers) {
    for (let i = 1; i <= students.length - 1; i++) {
      // pattern의 마지막 인덱스를 넘었다면, 0번째 부터 다시
      if (students[i].idx > students[i].pattern.length - 1) {
        students[i].idx = 0;
      }
      
      // 현재 채점 중인 학생의 답안
      const current = students[i].pattern[students[i].idx];

      // 정답과 답안이 일치한다면 점수 증가
      if (answer === current) {
        students[i].score += 1;
      }

      // pattern의 다음 인덱스를 채점하도록
      students[i].idx++;
    }
  }

  const scores = students.map((student) => student.score);
  let max = Math.max(...scores);

  for (let i = 1; i <= students.length - 1; i++) {
    if (students[i].score === max) {
      result.push(i);
    }
  }

  return result;
}

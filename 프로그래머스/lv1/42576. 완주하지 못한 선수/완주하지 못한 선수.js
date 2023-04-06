function solution(participant, completion) {
  // 완주하지 못한 선수 이름 리턴
  const completionCount = {};
  
  for (let person of completion) {
    completionCount[person] = (completionCount[person] || 0) + 1;
  }

  for (let person of participant) {
    if (completionCount[person]) completionCount[person]--;
    else return person;
  }
}

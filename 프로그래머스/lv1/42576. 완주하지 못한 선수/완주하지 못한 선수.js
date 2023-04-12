// function solution(participant, completion) {
//   const completionCount = completion.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, {});

//   for (let person of participant) {
//     if (completionCount[person]) completionCount[person]--;
//     else return person;
//   }
// }

function solution(participant, completion) {
  const hash = {};

  for (const c of completion) {
    hash[c] = (hash[c] || 0) + 1;
  }

  for (const p of participant) {
    if (!hash[p]) return p
    hash[p]--;
  }
}

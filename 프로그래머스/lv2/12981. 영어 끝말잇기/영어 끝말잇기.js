function solution(n, words) {
  const previousWords = [words[0]];
  let turn = 1;

  for (let i = 1; i < words.length; i++) {
    let currentFirst = words[i][0];
    let previousLast = previousWords[i - 1][previousWords[i - 1].length - 1];

    if (i % n === 0) turn++;

    if (currentFirst !== previousLast || words[i].length === 1 || previousWords.includes(words[i])) {
      return [(i % n) + 1, turn];
    }

    previousWords[i] = words[i];
  }
  return [0, 0];
}

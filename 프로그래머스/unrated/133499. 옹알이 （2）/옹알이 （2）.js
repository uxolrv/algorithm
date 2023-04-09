function solution(babbling) {
  const regExp = /aya|ye|woo|ma/g;
  let count = 0;

  outer: for (let word of babbling) {
    const matches = word.match(regExp);
    let previous = '';

    if (!matches || word !== matches.join('')) {
      continue;
    }

    for (let match of matches) {
      if (match === previous) {
        continue outer;
      }
      previous = match;
    }

    count++;
  }

  return count;
}
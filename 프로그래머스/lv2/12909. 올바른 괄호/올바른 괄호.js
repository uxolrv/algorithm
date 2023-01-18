function solution(s) {
  const openBracket = [];

  if (s[0] === ')' || s[s.length - 1] === '(') {
    return false;
  }

  s.split('').map((bracket) => {
    if (bracket === '(') {
      openBracket.push('open');
    } else {
      if (!openBracket.length) {
        return false;
      }
      openBracket.pop();
    }
  });

  return openBracket.length ? false : true;
}
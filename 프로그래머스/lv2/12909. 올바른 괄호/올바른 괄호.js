function solution(s) {
  const openBracket = [];

  if (s[0] === ')' || s[s.length - 1] === '(') {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      openBracket.push('open');
    } else {
      if (!openBracket.length) {
        return false;
      }
      openBracket.pop();
    }
  }

  return openBracket.length ? false : true;
}
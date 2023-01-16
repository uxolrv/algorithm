function solution(s) {

  if (s[0] === ')' || s[s.length - 1] === '(') {
    return false;
  }

  const openBracket = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') openBracket.push('open');
    if (s[i] === ')') {
      if (!openBracket.length) {
        return false;
      }
      openBracket.pop();
    }
  }
  
  return openBracket.length ? false : true;
}
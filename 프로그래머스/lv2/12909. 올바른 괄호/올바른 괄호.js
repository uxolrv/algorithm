function solution(s) {
  const openBrackets = [];
    
  if (s[0] === ')' || s[s.length - 1] === '(') {
    return false;
  }

  s.split('').map((bracket) => {
    if (bracket === '(') {
      openBrackets.push('open');
    } else if (bracket === ')') {
      if (!openBrackets.length) {
        return false;
      }
      openBrackets.pop();
    }
  })

  return !openBrackets.length;
}
function solution(s) {
  let openBrackets = 0;
    
  if (s[0] === ')' || s[s.length - 1] === '(') {
    return false;
  }

  s.split('').map((bracket) => {
    if (bracket === '(') {
      openBrackets++;
    } else if (bracket === ')') {
      if (!openBrackets) {
        return false;
      }
      openBrackets--;
    }
  })

  return !openBrackets;
}
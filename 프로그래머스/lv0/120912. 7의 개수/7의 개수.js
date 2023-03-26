function solution(array) {
  const regExp = /7/g;
  const str = array.join('');
  const sevens = str.match(regExp);
  
  return sevens ? sevens.length : 0;
}
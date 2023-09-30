function solution(babbling) {
  const regExp = /aya|ye|woo|ma/g;
  let count = 0;
  
  babbling.forEach((bab) => {
    const splitedBabbling = bab.split(regExp).join('');
    if (!splitedBabbling.length) count++;
  });

  return count;
}

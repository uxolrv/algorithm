function solution(s, skip, index) {
  const alphabets = [...'abcdefghijklmnopqrstuvwxyz'].filter(
    (alphabet) => !skip.includes(alphabet)
  );

  return [...s].map((char, i) => {
    const charIdx = alphabets.indexOf(char) + index;
    return alphabets[charIdx % alphabets.length]
  }).join('')
}

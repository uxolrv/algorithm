function solution(s) {
  const strNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

  for(let i = 0; i < strNum.length; i++) {
    if (s.includes(strNum[i])) {
      s = s.replaceAll(strNum[i], i)
    }
  }
  return Number(s)
}
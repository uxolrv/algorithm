function solution(array, commands) {
  let result = [];
  for(let com of commands) {
    let sorted = array.slice(com[0] - 1, com[1]).sort((a, b) => a - b)
    result.push(sorted[com[2] - 1])
  }
  return result
}
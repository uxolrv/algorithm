function solution(d, budget) {
    let count = 0;
  	for (let money of d.sort((a, b) => a - b)) {
      if (budget - money < 0) {
        break;
      }
      budget -= money
      count++
    }
    return count
}
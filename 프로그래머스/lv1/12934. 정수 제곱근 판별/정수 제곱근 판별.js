function solution(n) {
  	const pow = Math.sqrt(n)
  	return pow % 1 === 0 ? (pow+1)**2 : -1
}
function solution(s) {
  	const mid = s.length/2
    return s.length % 2 === 1 ? s[Math.floor(mid)] :
  	s.slice(mid - 1, mid + 1)
}
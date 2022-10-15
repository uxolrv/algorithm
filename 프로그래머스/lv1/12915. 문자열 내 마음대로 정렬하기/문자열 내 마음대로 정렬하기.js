function solution(strings, n) {
  	// 기준이 되는 n번째 글자를 가장 앞에 추가한 후 정렬
    const sorted = strings.map(el => el = el[n] + el).sort()
    // 추가했던 n번째 글자를 자른 후 리턴
    return sorted.map(el => el.slice(1, el.length))
}
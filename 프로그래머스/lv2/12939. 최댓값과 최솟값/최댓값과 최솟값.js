function solution(s) {
    // split으로 공백 제거한 배열로 만든 후
    // map으로 배열의 요소 하나하나를 Number 타입으로 변경
    // sort로 작은 수가 앞으로 오도록 정렬
    let arr = s.split(' ').map(str => Number(str)).sort((a, b) => a - b)
    
    return `${arr[0]} ${arr[arr.length - 1]}`
}
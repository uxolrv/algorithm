function solution(arr) {
    // reduce로 arr의 합을 구한 후 arr.length로 나눠 평균값 도출
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length

}
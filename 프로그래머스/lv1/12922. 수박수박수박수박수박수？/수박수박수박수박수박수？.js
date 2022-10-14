function solution(n) {
    let result = ''
    // i가 홀수면 수, 짝수면 박
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) result += '수'
        else result += '박'
    }
    return result
}
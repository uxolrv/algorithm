function solution(arr, divisor) {
    let sorted = arr.sort((a,b) => a - b)
    let result = sorted.filter(num => num % divisor === 0)

    return result.length === 0 ? [-1] : result
}
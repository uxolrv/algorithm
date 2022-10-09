function solution(arr, divisor) {
    let sorted = arr.sort((a,b) => a - b)
    let result = sorted.filter(num => num % divisor === 0)
    
    if (result.length === 0) {
        result.push(-1)
    }

    return result
}
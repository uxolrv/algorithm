function solution(numbers) {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = num.filter(el => !numbers.includes(el))
    return result.reduce((acc, cur) => acc + cur) 
}
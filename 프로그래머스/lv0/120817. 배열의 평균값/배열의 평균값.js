function solution(numbers) {
    const average = numbers.reduce((acc, cur) => acc + cur) / numbers.length
    return average;
}
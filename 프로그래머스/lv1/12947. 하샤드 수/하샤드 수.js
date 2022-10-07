function solution(x) {
    let splitedX = String(x).split('').map(el => parseInt(el))
    const sum = splitedX.reduce((acc, cur) => acc + cur, 0)

    return x % sum === 0
}

function solution(n) {
    
    let result = 0;
    let splitedN = String(n).split('')

    for (let num of splitedN) {
        result += Number(num)
    }
    
    return result;
}
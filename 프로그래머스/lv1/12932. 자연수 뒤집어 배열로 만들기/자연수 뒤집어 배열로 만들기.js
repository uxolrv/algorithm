function solution(n) {
    const arr = String(n).split('');
    let result = [];
    for (let el of arr) {
        result.unshift(Number(el))
    }
  
    return result;
}
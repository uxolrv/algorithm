function solution(array, n) {
    const count = array.filter(num => num === n).length
    
    return count;
}
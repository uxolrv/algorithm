function solution(s){
    let upper = s.toUpperCase()
    let pNum = 0;
    let yNum = 0;
    
    for (let letter of upper) {
        if (letter === 'P') pNum++
        else if (letter === 'Y') yNum++
    }
    
    if (pNum === yNum) return true
    else return false
}
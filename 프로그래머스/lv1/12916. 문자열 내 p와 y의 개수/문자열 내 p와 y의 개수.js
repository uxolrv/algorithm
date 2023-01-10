function solution(s){
    let count = 0;

    for (let letter of s) {
        if ('Pp'.includes(letter)) count++
        else if ('Yy'.includes(letter)) count--
    }
  
    return count === 0
}

function solution(s, n) {
    const capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const small = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += ' '
            continue;
        }
        for (let j = 0; j < capital.length; j++) {
            let idx = j + n
            if (j + n > capital.length - 1) {
                idx = j + n - capital.length
            }
            
            if (s[i] === capital[j]) {
                result += capital[idx]
            } else if (s[i] === small[j]) {
                result += small[idx]
            }
        }
    }
    return result;
}

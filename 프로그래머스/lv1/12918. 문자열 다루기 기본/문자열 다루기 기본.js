function solution(s) {
    let regex = /[a-zA-Z]/g
    if (s.length !== 4 && s.length !== 6) return false
    return !regex.test(s)
}
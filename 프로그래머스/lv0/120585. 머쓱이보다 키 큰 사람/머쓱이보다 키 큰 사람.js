function solution(array, height) {
    const peopleNum = array.filter(el => el > height).length;
    return peopleNum;
}
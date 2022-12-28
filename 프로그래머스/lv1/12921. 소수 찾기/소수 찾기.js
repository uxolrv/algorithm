function solution(n) {
    // 0과 1은 소수가 아니므로 false로 채워둔다
    const arr = new Array(n + 1).fill(true, 2).fill(false, 0, 2);
    
    for(let i = 2; i <= Math.sqrt(n); ++i){
        // 이미 제거된 인덱스는 건너뛰기
        if(arr[i] === false){
            continue; 
        }
        // i를 제외한 i의 배수를 제거
        for(let k = i * i; k <= n; k += i){
            arr[k] = false;
        }
    }
    
    const count = arr.filter(isPrime => !!isPrime).length
    return count;
}
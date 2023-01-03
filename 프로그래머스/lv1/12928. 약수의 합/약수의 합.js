function solution(n) {
    let sum = 0;

    for(let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i
            // n / i이 i랑 같다면 이미 구한 약수이므로, 제외
            if (n / i !== i) {
              sum += n / i
            }
        }
    }
  
    return sum;
}
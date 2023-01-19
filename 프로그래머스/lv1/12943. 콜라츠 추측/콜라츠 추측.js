

function solution(num) {
  let count = 0;
    
  if (num === 1) return 0;
    
  function collatz(n) {
    if (n === 1) return count;
    if (500 <= count) return -1;

    if (n % 2 === 0) n /= 2;
    else n = n * 3 + 1;
  
    count++;
  
    return collatz(n);
  }

  return collatz(num);
}


function solution(n, m) {
    
    const gcd = (n, m) => {
      return (n % m === 0) ? m : gcd(m, n % m)
    }
    
    const lcm = (n, m) => {
      return n * m / gcd(n, m)
    }
    
    return [gcd(n, m), lcm(n, m)]
}


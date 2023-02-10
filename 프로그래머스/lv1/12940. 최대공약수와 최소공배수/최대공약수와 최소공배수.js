function solution(n, m) {
  const getGCD = (n, m) => {
    return n % m === 0 ? m : getGCD(m, n % m);
  };

  const gcd = getGCD(n, m);

  const getLCM = (n, m) => {
    return (n * m) / gcd;
  };

  return [gcd, getLCM(n, m)];
}